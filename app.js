const API=“/api”;

async function loadLinks(){ const res=await fetch(API+“/list”); const
data=await res.json(); const tbody=document.getElementById(“links”);
tbody.innerHTML=““;

data.forEach(item=>{
tbody.innerHTML+=<tr> <td>${item.slug}</td> <td><a href="${item.original_url}" target="_blank">${item.original_url}</a></td> <td> <button onclick="copyLink('${item.slug}')">Copy</button> <button onclick="deleteLink('${item.slug}')">Delete</button> </td> </tr>;
}); }

async function createLink(){ const
slug=document.getElementById(“slug”).value.trim(); const
url=document.getElementById(“url”).value.trim();

await fetch(API+“/create”,{ method:“POST”,
headers:{“Content-Type”:“application/json”},
body:JSON.stringify({slug,url}) });

document.getElementById(“slug”).value=““;
document.getElementById(”url”).value=““; loadLinks(); }

async function deleteLink(slug){ if(!confirm(“Delete this short link?”))
return; await fetch(API+“/delete/”+slug,{method:“DELETE”}); loadLinks();
}

async function copyLink(slug){ const
url=“https://goflie-me.store/”+slug; await
navigator.clipboard.writeText(url); alert(“Copied:”+url); }

loadLinks();
