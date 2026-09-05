const moods={
happy:{badge:'🎉 HAPPY',track:'happy.mp3',title:'वो पल जब हँसी अपने-आप आ गई',text:'छोटी-सी बात, थोड़ी-सी मस्ती और एक ऐसी याद जिसे दोबारा सोचकर भी मुस्कुराहट आ जाए।',quote:'“ख़ुशियों का कोई बड़ा कारण नहीं था… बस तुम थीं, इसलिए वो पल ख़ास था।”'},
love:{badge:'💗 MOHABBAT',track:'love.mp3',title:'कुछ बातें सिर्फ़ दिल समझता है',text:'एक साधारण-सा पल, जो बाद में सबसे ख़ूबसूरत याद बन गया।',quote:'“मोहब्बत शायद वही है—जहाँ एक छोटी-सी याद भी पूरी शाम को रोशन कर दे।”'},
emotional:{badge:'❤️‍🩹 EHSAAS',track:'emotional.mp3',title:'ख़ामोशी के भी अपने अल्फ़ाज़ होते हैं',text:'कुछ पल ऐसे होते हैं जिन्हें समझाने से ज़्यादा महसूस किया जाता है।',quote:'“जो बात लफ़्ज़ों में नहीं आई, वही शायद दिल में सबसे देर तक रही।”'},
memories:{badge:'🍂 MEMORIES',track:'memories.mp3',title:'एक तस्वीर, और पूरा वक़्त वापस',text:'पुरानी तस्वीरों में उस दिन की हँसी, मौसम और छोटी-छोटी बातें भी छुपी होती हैं।',quote:'“वक़्त गुज़र जाता है, मगर कुछ पल दिल की अलमारी में वैसे ही रखे रहते हैं।”'}
};
const $=id=>document.getElementById(id),audio=$('audio');let current='love';
function choose(k,auto=false){current=k;const m=moods[k];$('badge').textContent=m.badge;$('quote').textContent=m.quote;$('title').textContent=m.title;$('text').textContent=m.text;$('trackMood').textContent=m.badge.replace(/[^A-Z ]/g,'').trim();$('track').textContent=m.track;audio.src='music/'+m.track;$('progress').style.width='0';$('experience').classList.add('active');$('experience').scrollIntoView({behavior:'smooth'});if(auto)audio.play().catch(()=>{})}
$('enter').onclick=()=>$('moods').scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.card').forEach(c=>c.onclick=()=>choose(c.dataset.mood));
$('back').onclick=()=>{$('experience').classList.remove('active');$('moods').scrollIntoView({behavior:'smooth'})};
$('play').onclick=()=>{if(audio.paused){audio.play().catch(()=>{});$('play').textContent='Ⅱ'}else{audio.pause();$('play').textContent='▶'}};
$('next').onclick=()=>{const k=Object.keys(moods),n=(k.indexOf(current)+1)%k.length;choose(k[n],true)};
audio.ontimeupdate=()=>{if(audio.duration)$('progress').style.width=(audio.currentTime/audio.duration*100)+'%'};
audio.onended=()=>$('play').textContent='▶';
$('openLetter').onclick=()=>$('paper').classList.toggle('open');
choose('love');
