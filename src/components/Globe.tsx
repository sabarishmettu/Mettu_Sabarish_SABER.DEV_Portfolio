import React, { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Color,
  Mesh,
  Group,
  InstancedMesh,
  Matrix4,
  Vector3,
  TubeGeometry,
  CatmullRomCurve3,
} from "three";

export interface GlobeMarker {
  lat: number;
  lng: number;
  name?: string;
}

export interface GlobeProps {
  speed?: number;
  scale?: number;
  dotColor?: string;
  gridColor?: string;
  markerColor?: string;
  markers?: GlobeMarker[];
  className?: string;
}

function latLngToVector3(lat: number, lng: number, radius: number): Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new Vector3(x, y, z);
}

// Built-in simplified land coordinates (latitude, longitude) covering major continents
// Eliminates external network dependency so globe renders instantly and reliably
const LAND_COORDINATES: [number, number][] = [
  // North America
  [65, -150], [60, -120], [55, -100], [50, -85], [45, -75], [40, -74], [35, -80], [30, -82],
  [25, -80], [30, -90], [30, -100], [32, -115], [37, -122], [47, -122], [58, -135],
  [45, -110], [40, -105], [35, -95], [42, -88], [45, -93], [52, -106],
  // South America
  [10, -75], [5, -60], [0, -50], [-10, -37], [-23, -43], [-34, -58], [-45, -65], [-55, -68],
  [-40, -73], [-20, -70], [-5, -80], [5, -77], [-15, -47], [-10, -55], [-25, -57],
  // Europe
  [60, 10], [65, 25], [55, 37], [52, 21], [50, 14], [48, 2], [43, 3], [37, -3], [38, 15],
  [41, 29], [45, 15], [55, -3], [53, -6], [59, 18], [60, 25],
  // Africa
  [35, -5], [32, 30], [25, 32], [12, 45], [5, 48], [-5, 40], [-26, 32], [-34, 18],
  [-22, 14], [-5, 12], [5, 2], [15, -17], [28, -13], [10, 15], [0, 25], [-15, 25],
  // Asia & India
  [60, 60], [60, 90], [60, 120], [60, 150], [50, 130], [40, 116], [30, 121], [22, 114],
  [15, 108], [10, 106], [1, 104], [22, 91], [13, 80], [8, 77], [19, 73], [28, 77],
  [35, 75], [45, 80], [30, 70], [35, 52], [25, 55], [24, 45], [30, 35],
  // Japan & SE Asia
  [36, 138], [43, 142], [33, 130], [14, 121], [-7, 110], [-2, 115], [-6, 106],
  // Australia & Oceania
  [-12, 130], [-20, 148], [-33, 151], [-38, 145], [-35, 117], [-22, 114], [-15, 124],
  [-42, 147], [-37, 175], [-45, 170]
];

export const Globe: React.FC<GlobeProps> = ({
  speed = 1.2,
  scale = 1,
  dotColor = "#ff1a1a",
  gridColor = "rgba(255, 26, 26, 0.2)",
  markerColor = "#ffffff",
  markers = [
    { lat: 16.5062, lng: 80.6480, name: "SRM Amaravati" },
    { lat: 12.9716, lng: 77.5946, name: "Bengaluru" },
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 1.3521, lng: 103.8198, name: "Singapore" },
    { lat: 25.2048, lng: 55.2708, name: "Dubai" },
    { lat: 40.7128, lng: -74.0060, name: "New York" },
  ],
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240 / scale;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const globeRadius = 65;
    const globeGroup = new Group();
    scene.add(globeGroup);

    // Initial tilt
    globeGroup.rotation.x = 0.35;
    globeGroup.rotation.y = 1.8;

    // 1. Inner Wireframe / Graticule Rings
    const graticuleMat = new MeshBasicMaterial({
      color: new Color(gridColor),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const sphereGeo = new SphereGeometry(globeRadius, 24, 18);
    const graticuleSphere = new Mesh(sphereGeo, graticuleMat);
    globeGroup.add(graticuleSphere);

    // 2. Glowing Equator & Latitude Loops
    const latRings = [-30, 0, 30];
    latRings.forEach(lat => {
      const ringPoints: Vector3[] = [];
      for (let i = 0; i <= 64; i++) {
        const lng = (i / 64) * 360 - 180;
        ringPoints.push(latLngToVector3(lat, lng, globeRadius + 0.2));
      }
      const curve = new CatmullRomCurve3(ringPoints);
      const tubeGeo = new TubeGeometry(curve, 64, 0.25, 4, true);
      const ringMat = new MeshBasicMaterial({
        color: new Color("#ff1a1a"),
        transparent: true,
        opacity: lat === 0 ? 0.45 : 0.2,
      });
      const tubeMesh = new Mesh(tubeGeo, ringMat);
      globeGroup.add(tubeMesh);
    });

    // 3. Dense Cyber Matrix Dots across landmasses
    // Generate fine grid points around land clusters
    const allDots: Vector3[] = [];
    LAND_COORDINATES.forEach(([centerLat, centerLng]) => {
      // Create a localized cluster of points for realistic continent shapes
      for (let dLat = -4; dLat <= 4; dLat += 2) {
        for (let dLng = -4; dLng <= 4; dLng += 2) {
          const lat = centerLat + dLat;
          const lng = centerLng + dLng;
          if (lat >= -85 && lat <= 85) {
            allDots.push(latLngToVector3(lat, lng, globeRadius + 0.5));
          }
        }
      }
    });

    // Additional global background matrix dots
    for (let lat = -70; lat <= 70; lat += 15) {
      for (let lng = -180; lng < 180; lng += 20) {
        allDots.push(latLngToVector3(lat, lng, globeRadius + 0.2));
      }
    }

    const dotGeo = new SphereGeometry(0.75, 6, 6);
    const dotMat = new MeshBasicMaterial({
      color: new Color(dotColor),
      transparent: true,
      opacity: 0.9,
    });
    const instancedMesh = new InstancedMesh(dotGeo, dotMat, allDots.length);
    const matrix = new Matrix4();

    allDots.forEach((pos, i) => {
      matrix.setPosition(pos);
      instancedMesh.setMatrixAt(i, matrix);
    });
    instancedMesh.instanceMatrix.needsUpdate = true;
    globeGroup.add(instancedMesh);

    // 4. White Glowing Active Node Markers
    markers.forEach(m => {
      const pos = latLngToVector3(m.lat, m.lng, globeRadius + 1.2);
      
      // Marker Core Sphere
      const markerGeo = new SphereGeometry(1.6, 12, 12);
      const markerMat = new MeshBasicMaterial({
        color: new Color(markerColor),
      });
      const markerMesh = new Mesh(markerGeo, markerMat);
      markerMesh.position.copy(pos);
      globeGroup.add(markerMesh);

      // Marker Glowing Ping Ring
      const ringGeo = new SphereGeometry(2.8, 8, 8);
      const pingMat = new MeshBasicMaterial({
        color: new Color("#ff1a1a"),
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      const pingMesh = new Mesh(ringGeo, pingMat);
      pingMesh.position.copy(pos);
      globeGroup.add(pingMesh);
    });

    // Interactive Drag Handlers
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      globeGroup.rotation.y += deltaX * 0.008;
      globeGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      autoRotate = true;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Resize Observer
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    let animationFrame: number;
    const animate = () => {
      if (autoRotate) {
        globeGroup.rotation.y += 0.003 * speed;
      }
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      domEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [speed, scale, dotColor, gridColor, markerColor, markers]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`}
    />
  );
};

export default Globe;
