# React-cytoscape template

npm関連のインストール

```bash
# cytoscapeのインストール
docker compose run --rm react npm install cytoscape
docker compose run --rm react npm install --save-dev @types/cytoscape
# mui関連のインストール
docker compose run --rm react npm install @mui/material @emotion/react @emotion/styled
docker compose run --rm react npm install @mui/material @mui/styled-engine-sc styled-components
docker compose run --rm react npm install @fontsource/roboto
npm install @mui/icons-material
```

```
docker compose up -d
```

`http://localhost:3000`

- [x] up -d
- [x] hot reload
- [x] routing
- [x] cytoscape
- [x] mui
- [ ] add nodes
- [ ] update nodes
- [ ] save nodes
- [ ] popup dialogs
- [ ] list nodes
- [ ] search nodes