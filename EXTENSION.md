# Rendering Parts Extension

We want to add 2 dropdowns to each part in our parts list (from the first exercise):

- Manufacturing Process
- Material

These dropdowns will get their data from the server (`/manufacturing_processes`). Each process renders it's own set of materials.

### Acceptance Criteria

- [ ] Manufacturing Process dropdown should populate from the server
- [ ] Material dropdown should be hidden until a Manufacturing Process is chosen
- [ ] Material dropdown should populate from the chosen Manufacturing Process
- [ ] The "Save" action should include the chosen Manufacturing Process and Material alongside Quantity

### GET `/manufacturing_processes`

Get manufacturing process data with a `GET` request to `/manufacturing_processes`:

#### Response:

```javascript
{
  data: [
    {
      id: '1',
      name: 'DLS',
      materials: [
        { id: '1', name: 'RPU 70' },
        { id: '2', name: 'FPU 50' },
      ],
    },
    ...
  ]
}
```

### Context on the Manufacturing Processes:

Fast Radius helps companies create their parts through a variety of manufacturing processes. Here are more details on the 3 processes used in the sample data:

- **DLS:** Digital Light Synthesis, an additive (3D printing) technology. Prints by curing layers of plastic resin with UV light.
- **FDM:** Fused Deposition Modeling, an additive (3D printing) technology. Prints by forcing plastic filament through a nozzle and depositing layers. FDM is the technology most desktop 3D printers use.
- **CNC:** Computer Numerical Control, a traditional subtractive manufacturing process. Creates a part by cutting or milling away material.
