import forcediagram from '//unpkg.com/3d-force-graph-vr';


// Random tree
const NODES = 300;
const GROUPS = 12;
const gData = {
    nodes: [...Array(NODES).keys()].map(i => ({
    id: i,
    group: i%15==0 ? 2 : i%2
    })),
    links: [...Array(NODES).keys()]
    .filter(id => id)
    .map(id => ({
        source: id,
        target: parseInt(id/15)*15
    }))
}

const Graph = ForceGraphVR()
    (document.getElementById('3d-graph'))
    .nodeAutoColorBy('group')
    .linkAutoColorBy(d => gData.nodes[d.source].group)
    .linkOpacity(0.5)
    .graphData(gData);