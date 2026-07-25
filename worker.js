if (results.length) {

  await env.DB.prepare(`
    INSERT INTO clicks
    (slug,country,city,ip,user_agent,referer,created_at)
    VALUES(?,?,?,?,?,?,?)
  `)
  .bind(
    slug,
    request.cf?.country || "Unknown",
    request.cf?.city || "",
    request.headers.get("CF-Connecting-IP") || "",
    request.headers.get("User-Agent") || "",
    request.headers.get("Referer") || "",
    Date.now()
  )
  .run();

  return Response.redirect(results[0].original_url, 302);
}
