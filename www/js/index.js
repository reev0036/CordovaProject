const app = {
    discography: [
        {
            "id":1,
            "album": "Skin & Earth",
            "released": "2017",
            "label": "Warner Bros. Records",
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
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            "tracklist":[
                {"id":"1a", "track": "Othertro"},
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
            "id":3,
            "album": "Little Machines",
            "released": "2014",
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            },
        {
            "id":4,
            "album": "Siberia (Acoustic)",
            "released": "2013",
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            },
        {
            "id":5,
            "album": "Siberia",
            "released": "2011",
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            },
        {
            "id":6,
            "album": "The Listening",
            "released": "2009",
            "label": "Warner Bros. Records",
            "genres": "Electropop, Synthpop",
            }
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

        console.log(app.discography);
        
        //fetch the JSON data
        //fetch()
        //.then()
        //.then(
        //save the imported JSON into app.DATA
        //pass the data to a function that builds the first page  
        app.showThings(app.discography);
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
            
            let itemTitle = document.createElement("h2");
            itemTitle.textContent = listItem.album;
            itemTitle.classList.add("item-title");
            div.appendChild(itemTitle);
            
            let itemDate = document.createElement("p");
            itemDate.textContent = listItem.released;
            itemDate.classList.add("item-desc");
            div.appendChild(itemDate);
            
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
        //let listItemId = id.currentTarget.getAttribute("data-key");
        //dummy data for demonstration purposes
        //let activeItem;
        //app.discography.forEach(listItem=>{
            //if(listItem.id == id){
             //   activeItem = id;
           // }
        // });
        //console.log("intial");
        //console.log(id);
        return app.discography[id - 1];
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
        
        let section = document.querySelector("#details-page .content");
        
        let df = document.createDocumentFragment();
        section.innerHTML = "";
        
        let h2 = document.createElement("h2");
        h2.textContent = obj.album;
        section.appendChild(h2);
        
        let released = document.createElement("p");
        released.textContent = "Release: " + obj.released;
        section.appendChild(released);
        
        let ul = document.createElement("ul");
        ul.innerHTML = "";
        
        for (var i=0; i < obj.tracklist.length; i++){
            //console.log(obj.tracklist[i].track);
            let li = document.createElement("li");
            li.textContent = obj.tracklist[i].track;
            section.appendChild(li);
        }
        section.appendChild(ul);
        section.appendChild(df);
    },
    backHome: function (ev) {
        if (ev) {
            ev.preventDefault();
            //only add to the pushState if the user click OUR back button
            //don't do this for the browser back button
            history.pushState({}, "List", `#list`);
            document.title = 'List of Items';
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
