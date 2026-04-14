// Script to fetch and update project descriptions via admin API
const BASE = 'http://localhost:3000';

async function main() {
  // Step 1: Login to get session
  console.log('--- Step 1: Getting auth session ---');
  
  // Use NextAuth credentials provider
  const loginRes = await fetch(`${BASE}/api/auth/callback/credentials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      email: 'your-email@example.com',
      password: 'your-password-here',
      csrfToken: '',
      json: 'true',
    }),
    redirect: 'manual',
  });
  
  // Get cookies from login response
  const cookies = loginRes.headers.getSetCookie?.() || [];
  console.log('Login status:', loginRes.status);
  console.log('Cookies received:', cookies.length);
  
  // Build cookie header
  const cookieHeader = cookies.map(c => c.split(';')[0]).join('; ');
  
  // Step 2: Fetch current projects
  console.log('\n--- Step 2: Fetching projects ---');
  const projectsRes = await fetch(`${BASE}/api/admin/projects`, {
    headers: { 'Cookie': cookieHeader }
  });
  const projects = await projectsRes.json();
  
  console.log(`Found projects:`, projects);
    console.log(`\n[${i}] ID: ${p.id}`);
    console.log(`    Name: ${p.name}`);
    console.log(`    Description: ${p.description?.substring(0, 100)}...`);
    console.log(`    Tags: ${JSON.stringify(p.tags)}`);
    console.log(`    Deploy: ${p.deploy_link}`);
    console.log(`    Source: ${p.source_code_link}`);
  });
}

main().catch(console.error);
