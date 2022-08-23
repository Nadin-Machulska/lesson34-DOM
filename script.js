const playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
        lyrics: 'bbbbbbbbbbbbbbbb',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
        lyrics: 'aaaaaaaaaaaaaaaaaaaa',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
        lyrics: 'ccccccccccc',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`



    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
        lyrics: 'ddddddddddddddddd',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`



    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
        lyrics: 'eeeeeeeeeeeeeee',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK",
        lyrics: 'fffffffffffff',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
        lyrics: 'gggggggggggg',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
        lyrics: 'svfikvskbaufb',
        video: `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/QkF3oxziUI4" title="Led Zeppelin - Stairway To Heaven (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
];
    

    for (let i=0; i <= playList.length; i+= 1){
        const ol = document.querySelector('.songs__list')
        const li = document.createElement('li');
        const song = document.createElement('span');
        const button = document.createElement('button');
        const myModal = document.createElement('div');
        const modalContent = document.createElement('div');
        const closeBtn = document.createElement('span');
        const lyrics = document.createElement('p');
        const videoFrame = document.createElement('div');

        ol.append(li)

        li.append(song ,button, myModal)
        button.classList.add('myBtn', 'fa-brands', 'fa-youtube')
        song.classList.add('song')
        myModal.classList.add('myModal', 'modal')

    
        myModal.append(modalContent)
        modalContent.classList.add('modal-content')

        modalContent.append(closeBtn, lyrics, videoFrame)
        videoFrame.classList.add('video')
        closeBtn.classList.add('close')
        lyrics.classList.add('lyrics')
    
        videoFrame.innerHTML = playList[i].video;
        song.innerText = playList[i].song;
        closeBtn.innerText = 'X';
        lyrics.innerText = playList[i].lyrics;

        button.onclick = function() {
            myModal.style.display = "block";
          }
          
          // When the user clicks on <span> (x), close the modal
          closeBtn.onclick = function() {
            myModal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target === modal) {
              myModal.style.display = "none";
            }
          }
        
}



// Get the modal
// var modal = document.querySelector(".myModal");

// // Get the button that opens the modal
// var button = document.querySelector(".myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal



