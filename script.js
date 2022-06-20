const insert=document.querySelector('.insert');
window.addEventListener('keydown',(e)=>{
    console.log(e);
    insert.innerHTML=`
    <div class="key-con">
        ${e.key===' '? 'space':e.key}
        <small>eventkey</small>
    </div>
    <div class="key-con">
        ${e.keyCode}
        <small>keycode</small>
    </div>
    <div class="key-con">
        ${e.code}
        <small>event</small>
    </div>
    `;
})