import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";
import { useState } from "react";

enum LayoutOptions {
    Null = "null",
    Random = "random",
    Preset = "preset",
    Grid = "grid",
    Circle = "circle",
    Concentric = "concentric",
    Breadthfirst = "breadthfirst",
    Cose = "cose",
}

function CyCompo() {
    const [layout, setLayout] = useState(LayoutOptions.Null);
    const elements = [
            { data: { id: "parent" } },
            { data: { id: "one", label: "Node 1", parent: "parent" }, position: { x: 0, y: 0 } },
            { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
            { data: { id: "three", label: "Node 3", parent: "parent" }, position: { x: 200, y: 0 } },
            { data: { id: "four", label: "Node 4", parent: "parent" }, position: { x: 300, y: 0 } },
            { data: { id: "five", label: "Node 5" }, position: { x: 400, y: 0 } },
            { data: { source: "one", target: "two", label: "Edge from Node 1 to Node 2" } },
            { data: { source: "one", target: "three", label: "Edge from Node 1 to Node 3" } },
            { data: { source: "two", target: "four", label: "Edge from Node 2 to Node 4" } },
            { data: { source: "two", target: "five", label: "Edge from Node 2 to Node 5" } }
    ];

    const cyEleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cyInstance = cytoscape({
            container: cyEleRef.current,
            elements: elements,
            style: [],
            layout: {
                name: layout,
            },
            boxSelectionEnabled: true,
            wheelSensitivity: 0.3,
        });

        return () => {
            cyInstance.destroy();
        };
    }, [layout]);

    return (
        <>
            <select
                value={layout}
                onChange={(e) => setLayout(e.target.value as LayoutOptions)}
            >
                <option value={LayoutOptions.Null}>Null</option>
                <option value={LayoutOptions.Random}>Random</option>
                <option value={LayoutOptions.Preset}>Preset</option>
                <option value={LayoutOptions.Grid}>Grid</option>
                <option value={LayoutOptions.Circle}>Circle</option>
                <option value={LayoutOptions.Concentric}>Concentric</option>
                <option value={LayoutOptions.Breadthfirst}>Breadthfirst</option>
                <option value={LayoutOptions.Cose}>Cose</option>
            </select>

            <div ref={cyEleRef} style={{ width: "100%", height: "100%", background: "gray" }} />
        </>

    );
}

export default CyCompo;