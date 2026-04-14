const BASE = 'http://localhost:3000';

async function main() {
  console.log('\n--- Fetching projects ---');
  const projectsRes = await fetch(`${BASE}/api/projects`);
  const projects = await projectsRes.json();
  
  console.log(JSON.stringify(projects.map(p => ({
    id: p._id || p.id,
    name: p.name
  })), null, 2));
}

main().catch(console.error);
