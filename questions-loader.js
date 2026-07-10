async function loadQuizQuestions(){
  const files=[
    'data/questions.part1.txt',
    'data/questions.part2.txt',
    'data/questions.part3.txt'
  ];
  const parts=await Promise.all(files.map(async path=>{
    const response=await fetch(path);
    if(!response.ok) throw new Error(`Không tải được ${path}`);
    return (await response.text()).trim();
  }));
  const binary=atob(parts.join(''));
  const bytes=Uint8Array.from(binary,char=>char.charCodeAt(0));
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  const json=await new Response(stream).text();
  window.QUIZ_QUESTIONS=JSON.parse(json);
  await import('./app.js');
}

loadQuizQuestions().catch(error=>{
  console.error(error);
  document.body.innerHTML=`<main style="max-width:760px;margin:60px auto;padding:24px;font-family:system-ui"><h1>Không thể tải dữ liệu câu hỏi</h1><p>${error.message}</p><p>Hãy mở trang bằng một web server như GitHub Pages hoặc Live Server thay vì mở trực tiếp bằng giao thức file://.</p></main>`;
});
