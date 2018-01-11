const app = {
    discography: [
        {
            "id":1,
            "album": "Skin & Earth",
            "released": "2017",
            "label": "LIGHTS Music Inc., Universal Canada Inc.",
            "genres": "Electropop, Synthpop",
            "tracklist":[
                {"id":"1a", "track": "Intro"},
                {"id":"1b", "track": "Skydiving"},
                {"id":"1c", "track": "Until The Light"},
                {"id":"1d", "track": "Savage"},
                {"id":"1e", "track": "New Fears"},
                {"id":"1f", "track": "Morphine"},
                {"id":"1g", "track": "We Were Here"},
                {"id":"1h", "track": "Kicks"},
                {"id":"1i", "track": "Giants"},
                {"id":"1j", "track": "Moonshine"},
                {"id":"1k", "track": "Interlude"},
                {"id":"1l", "track": "Magnetic Field"},
                {"id":"1m", "track": "Fight Club"},
                {"id":"1n", "track": "Almost Had Me"},
            ]
            },
        {
            "id":2,
            "album": "Midnight Machines",
            "released": "2016",
            "label": "LIGHTS Music Inc., Universal Canada Inc.",
            "genres": "Acoustic",
            "tracklist":[
                {"id":"2a", "track": "Up We Go - Acoustic"},
                {"id":"2b", "track": "Same Sea - Acoustic"},
                {"id":"2c", "track": "Follow You Down - Acoustic"},
                {"id":"2d", "track": "Meteorites - Acoustic"},
                {"id":"2e", "track": "Don't Go Home Without Me- Acoustic"},
                {"id":"2f", "track": "Running With The Boys - Acoustic"},
                {"id":"2g", "track": "Head Cold - Acoustic"},
                {"id":"2h", "track": "Muscle Memory - Acoustic"},
            ]
            },
        {
            "id":3,
            "album": "Little Machines",
            "released": "2014",
            "label": "LIGHTS Music Inc., Universal Canada Inc.",
            "genres": "Synthpop",
            "tracklist":[
                {"id":"3a", "track": "Portal"},
                {"id":"3b", "track": "Running With The Boys"},
                {"id":"3c", "track": "Up We Go"},
                {"id":"3d", "track": "Same Sea"},
                {"id":"3e", "track": "Speeding"},
                {"id":"3f", "track": "Muscle Memory"},
                {"id":"3g", "track": "Oil And Water"},
                {"id":"3h", "track": "Slow Down"},
                {"id":"3f", "track": "Meteorites"},
                {"id":"3g", "track": "How We Do It"},
                {"id":"3h", "track": "Don't Go Home Without Me"},
            ]
            },
        {
            "id":4,
            "album": "Siberia (Acoustic)",
            "released": "2013",
            "label": "LIGHTS Music Inc., Universal Canada Inc.",
            "genres": "Acoustic",
            "tracklist":[
                {"id":"4a", "track": "Banner- Acoustic"},
                {"id":"4b", "track": "Cactus In The Valley feat. Owl City - Acoustic"},
                {"id":"4c", "track": "Where The Fence Is Low - Acoustic"},
                {"id":"4d", "track": "Siberia feat. Max Kerman - Acoustic"},
                {"id":"4e", "track": "Suspension - Acoustic"},
                {"id":"4f", "track": "Toes - Acoustic"},
                {"id":"4g", "track": "Peace Sign feat. Coeur De Pirate - Acoustic"},
                {"id":"4h", "track": "Heavy Rope - Acoustic"},
                {"id":"4i", "track": "Flux And Flow - Acoustic"},
                {"id":"4j", "track": "...And Counting - Acoustic"},
                ]
            },
        {
            "id":5,
            "album": "Siberia",
            "released": "2011",
            "label": "LIGHTS Music Inc., Universal Canada Inc.",
            "genres": "Electropop, Synthpop",
            "tracklist":[
                {"id":"5a", "track": "Siberia"},
                {"id":"5b", "track": "Where The Fence Is Low"},
                {"id":"5c", "track": "Toes"},
                {"id":"5d", "track": "Banner"},
                {"id":"5e", "track": "Everybody Breaks A Glass"},
                {"id":"5f", "track": "Heavy Rope"},
                {"id":"5g", "track": "Timing Is Everything"},
                {"id":"5h", "track": "Peace Sign"},
                {"id":"5i", "track": "Cactus In The Valley"},
                {"id":"5j", "track": "Suspension"},
                {"id":"5k", "track": "Flux And Flow"},
                {"id":"5l", "track": "Fourth Dimension"},
                {"id":"5m", "track": "And Counting..."},
                {"id":"5n", "track": "Day One"},
                {"id":"5o", "track": "Frame And Focus"},
                {"id":"5p", "track": "Cactus In The Valley - Acoustic"},
            ]
            },
        {
            "id":6,
            "album": "The Listening",
            "released": "2009",
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            "tracklist":[
                {"id":"6a", "track": "Saviour"},
                {"id":"6b", "track": "Drive My Soul"},
                {"id":"6c", "track": "River"},
                {"id":"6d", "track": "The Listening"},
                {"id":"6e", "track": "Ice"},
                {"id":"6f", "track": "Pretend"},
                {"id":"6g", "track": "The Last Thing On Your Mind"},
                {"id":"6h", "track": "Second Go"},
                {"id":"6i", "track": "February Air"},
                {"id":"6j", "track": "Face Up"},
                {"id":"6k", "track": "Lions!"},
                {"id":"6l", "track": "Quiet"},
                {"id":"6m", "track": "Pretend (Reprise)"},
                ]
        },
        ],
                
    URL: '',
    DATA: null,
    init: function () {
        //fetch the data
        app.getData(app.discography);
        //add event listeners 
        app.addListeners();
        //fix the current url
        history.replaceState({}, "List", "#list");
        document.title = "LIGHTS Discography";
    },
    
    addListeners: function () {
        //back button on second page
        let backBtn = document.querySelector('#details-page header a');
        backBtn.addEventListener('click', app.backHome);
        //listen for the browser back button
        window.addEventListener('popstate', app.browserBack);
    },
    
    getData: function () {
        
        
        
        //fetch the JSON data
        //fetch()
        //.then()
        //.then(
        //save the imported JSON into app.DATA
        //pass the data to a function that builds the first page  
        app.DATA = app.discography;
        app.DATA.sort();
        
        console.log(app.DATA);
        app.showThings(app.DATA);
        //).catch();
    },
    
    showThings: function (listItems) {
        //loop through the array and display the cards
        //add the click listener on each title9
        let baseImgURL = "https://raw.githubusercontent.com/reev0036/CordovaProject/gh-pages/img/";
        let section = document.querySelector("#list-page .content");
        let df = document.createDocumentFragment();
        section.innerHTML = "";
        
        listItems.forEach(function(listItem){
            //console.log(listItem.album);
            //console.log(listItem.id);
            
            let div = document.createElement("div");
            div.classList.add("item-card");
            
            let img = document.createElement("img");
            img.setAttribute("data-key", listItem.id);
            img.setAttribute("alt", "Album Cover");
            img.src = "".concat(baseImgURL, listItem.id, ".jpg");
            img.classList.add("item-card-img");
            div.appendChild(img);
            
            df.appendChild(div);
        });
        
        section.appendChild(df);
        
        let titles = document.querySelectorAll('#list-page .item-card-img');        [].forEach.call(titles, (img) => {
            img.addEventListener('click', app.navDetails);
        });
    },
    
    navDetails: function (ev) {
        ev.preventDefault();
        window.scrollTo(0, 0);
        let h2 = ev.currentTarget;
        //extract the id from the heading
        let id = h2.getAttribute('data-key');
        //change the url and save the id in the history.state
        console.log(`#details/${id}`);
        history.pushState({
            "id": id
        }, "Details", `#details/${id}`);
        document.title = h2.textContent;
        //get the info about this item
        let obj = app.getItem(id);
        //pass it to a function to display those details
        app.showDetails(obj);
    },
    
    getItem: function (id) {
        
        //retrieve an object from our JSON data
        //where the id matches the one passed to this function
        
        return app.DATA[id - 1];
    },
    showDetails: function (obj) {
        //console.log(obj);
        //navigate to the second page
        document.getElementById('list-page').classList.remove('active');
        document.getElementById('details-page').classList.add('active');
        
        
        //set the title of the selected property
        let span = document.querySelector('.details-title');
        span.textContent = "";
        //loop through the obj properties with a for in loop
        //create some HTML for each property...
        
        let baseImgURL = "https://raw.githubusercontent.com/reev0036/CordovaProject/gh-pages/img/";
        
        let section = document.querySelector("#details-page .content");
        
        let df = document.createDocumentFragment();
        section.innerHTML = "";
        
        let div = document.createElement("div");
        div.classList.add("details-div")
        section.appendChild(div);
        
        let img = document.createElement("img");
            img.setAttribute("alt", "Album Cover");
            img.src = "".concat(baseImgURL, obj.id, ".jpg");
            img.classList.add("img-details");
        div.appendChild(img);
        
        let h2 = document.createElement("h2");
        h2.textContent = obj.album;
        div.appendChild(h2);
        
        
        let released = document.createElement("p");
        released.textContent = obj.released + " - ";
        div.appendChild(released);
        
        let genres = document.createElement("p");
        genres.textContent = obj.genres;
        div.appendChild(genres);
        
        let tl = document.createElement("p2");
        tl.textContent = "Tracklist: ";
        div.appendChild(tl);
        
        let tracklistUl = document.createElement("ul");
        tracklistUl.innerHTML = "";
        tracklistUl.classList.add("tracklist");
        
        for (var i=0; i < obj.tracklist.length; i++){
            //console.log(obj.tracklist[i].track);
            let li = document.createElement("li");
            li.textContent = obj.tracklist[i].track;
            tracklistUl.appendChild(li);
        }
        div.appendChild(tracklistUl);
        
        let recordLabel = document.createElement("copyright");
        recordLabel.textContent = "".concat("\u00A9" + obj.released + " " + obj.label);
        recordLabel.classList.add("copyright");
        div.appendChild(recordLabel);
        
        section.appendChild(df);
    },
    
    backHome: function (ev) {
        if (ev) {
            ev.preventDefault();
            //only add to the pushState if the user click OUR back button
            //don't do this for the browser back button
            history.pushState({}, "List", `#list`);
            document.title = 'LIGHTS Discography';
        }
        document.getElementById('list-page').classList.add('active');
        document.getElementById('details-page').classList.remove('active');
    },
    
    browserBack: function (ev) {
        console.log('user hit the browser back button');
        //the browser will change the location hash.
        //use the updated location.hash to display the proper page
        if (location.hash == '#list') {
            console.log('show the list page');
            //we want to show the list page
            app.backHome();
            //NOT passing the new MouseEvent('click')
        } else {
            //we want to display the details
            console.log('show the details');
            let id = location.hash.replace("#details/", "");
            //use the id number from the hash to fetch the proper data
            let obj = app.getItem(id);
            //pass it to a function to display those details
            app.showDetails(obj);
        }
    }
}

let loadEvent = ('deviceready' in document) ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(loadEvent, app.init);
