const resp = await fetch("/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt })
});
const data = await resp.json();
console.log(data.content);
