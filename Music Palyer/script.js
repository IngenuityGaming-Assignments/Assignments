const trackName = document.getElementById('trackName');
        const next = document.getElementById('next');
        const back = document.getElementById('back');
        const repeat = document.getElementById('repeat');
        const range = document.getElementById('range');
        var rep = false;


        const ap = document.createElement('audio');
        ap.volume = 0.5;
        ap.onplay = () => {
            setInterval(setRange, 1000)        
        }

        const vol = document.getElementById('vol_cur');
        vol.onchange = () => {
            // console.log((vol.value/100).toFixed(1))
            const v = parseFloat((vol.value/100).toFixed(1))
            ap.volume = v;
        }
        const playlist = [
            {name : 'Abc', sr : './Audio/1.mp3'},
            {name : 'Xyz', sr : './Audio/2.mp3'},
            {name : 'Pqr', sr : './Audio/3.mp3'}
        ]
        
        var ind = 0;
        // console.log(playlist[ind].sr)
        ap.src = playlist[ind].sr;

        const pause = document.getElementById('pause');
        const play = document.getElementById('play');

        document.addEventListener('click',async (e) => {
            if(e.target.id == 'pause'){
                ap.pause();

                pause.style.display = 'none';
                play.style.display = 'unset';

            }
            else if(e.target.id == 'play'){
                await ap.play();
                
                
                // console.log(playlist[ind].sr)

                play.style.display = 'none';
                pause.style.display = 'unset';


            }
            else if(e.target.id == 'repeat'){
                e.target.classList.toggle('hide');
                rep = !rep;

                if(rep && ind === 2){
                    next.disabled = false;
                }
                else if(!rep && ind === 2){
                    next.disabled = true;
                }

                if(rep && ind === 0){
                    back.disabled = false;
                }
                else if(!rep && ind === 0){
                    back.disabled = true;
                }
                
            }
            
        })


        back.onclick = () => { 
            if(rep && ind === 0){
                ind = 2;
                setSrc()
            }
            
            else{
                ind--;
                setSrc()
            } 

            if(!rep && ind === 0){
                back.disabled = true;
            }
            if(ind < 2 && next.disabled){
                next.disabled = false
            }

            // setRange()
        }

        next.onclick = () => { 
            if(rep && ind === 2){
                ind = 0;
            } 
            else{
                ind++;
            } 

            setSrc()

            if(!rep && ind === 2){
                next.disabled = true;
            }
            if(ind > 0 && back.disabled){
                back.disabled = false
            }

            // setRange()
        }

        async function setSrc(){
            play.style.display = 'none';
            pause.style.display = 'unset';
            // console.log(playlist[ind].sr)
            trackName.innerText = playlist[ind].name

            ap.src = playlist[ind].sr;
            
            await ap.play()
            // setInterval(setRange, 1000)
            totalDur()
            
            
        }

        function totalDur(){
            const dur = ap.duration
            // console.log(dur)
            var min = String(parseInt(dur/60));
            if(min.length === 1){
                min = '0' + min
            }
            var sec = String(parseInt(dur%60))
            if(sec.length === 1){
                sec = '0' + sec
            }
            // console.log(min + ":" + sec)
            document.getElementById('total').innerText = `${min}:${sec}`
        }

        function setRange(){
            curTime()
            range.value = (ap.currentTime/ap.duration)*100
        }
        
        function curTime(){
            const dur = ap.currentTime
            // console.log(dur)
            var min = String(parseInt(dur/60));
            if(min.length === 1){
                min = '0' + min
            }
            var sec = String(parseInt(dur%60))
            if(sec.length === 1){
                sec = '0' + sec
            }
            // console.log(min + ":" + sec)
            document.getElementById('cur').innerText = `${min}:${sec}`
        }