var posts=["posts/4a17b156.html","posts/6fb97407.html","posts/74cd693d.html","posts/3afa66e.html","posts/e3c1df92.html","posts/553a97ec.html","posts/3976864f.html","posts/4970cab7.html","posts/3665bf7d.html","posts/e7035e9f.html","posts/1fe3367f.html","posts/f8adb3e0.html","posts/ff8b855b.html","posts/2f2b7b43.html","posts/18760bb5.html","posts/8816fee1.html","posts/666d535d.html","posts/8ab680c7.html","posts/f5f81e3d.html","posts/75206e58.html","posts/88cb41b.html","posts/651c43c5.html","posts/b93c9a9c.html","posts/68795d4b.html","posts/94cc42f5.html","posts/1bca9758.html","posts/a8ad0e8e.html","posts/ee5d2157.html","posts/c53a16ca.html","posts/d3a2c55a.html","posts/af899832.html","posts/cab9f41b.html","posts/967773f.html","posts/58ee31e2.html","posts/3adda9b3.html","posts/804002d4.html","posts/5c68951c.html","posts/feb32ed4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};