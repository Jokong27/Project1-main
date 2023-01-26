const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff5970ae2dmsh490862a9b0fd945p19a641jsn625fba1f55bf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
};

let workouts = [];
let curArr = 0;
let minArr = 0;
let maxArr = 11;

let page = 1; // initialize page to 1
let workoutsPerPage = 12; // number of workouts to display per page
let pageCount = 0;
let curPage = 1;

let searchCounter = 0;


let searchInputValue;

const searchBtn2 = () => {
    searchInputValue = document.getElementById("searchInput").value
    document.getElementById("searchField").innerHTML = "";
    document.getElementById("searchFieldInfo").innerHTML = "";
    searchCounter = 0;

    const searchBtn = () => {

        async function getWorkouts(page, workoutsPerPage) {
            const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList${page}&workoutsPerPage=${workoutsPerPage}`, options);
            const data = await response.json();
            return data;
        }

        async function displayWorkouts() {
            let workouts = await getWorkouts(page, gamesPerPage);
            pageCount = workouts.length % 12 > 1 ? (workouts.length - workouts.length % 12) / 12 + 1 : false;

            let inputValueOrg = searchInputValue;
            let inputValue = searchInputValue.toLowerCase().split("");



            //x assigned for array counter of workouts (workouts' value inside workouts)


            searchCounter == 0 ? document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">Sorry! <span class="text-light">Didnt find anything for</span>  "${inputValue.join("")}"</h4>` : ``
            inputValue.length < 2 ? document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">**Please enter at least 2 characters!</h4>` : console.log("See");
            for (let x = 0; x <= workouts.length; x++) {
                let workoutsTitle = workouts[x].title.toLowerCase().split("")
                for (let inputValueAry = 0; inputValueAry < inputValue.length; inputValueAry++) {
                    for (let workoutsTitleAry = 0; workoutsTitleAry < workoutsTitle.length; workoutsTitleAry++) {
                        if (inputValue[0] == workoutsTitle[workoutsTitleAry]) {
                            if (gameTitle.length - gameTitleAry >= inputValue.length) {
                                let workoutsTitleSorted = workoutsTitle.slice(workoutsTitleAry).slice(0, inputValue.length).join("");
                                if (inputValueOrg.toLowerCase() == workoutsTitleSorted) {
                                    inputValueAry = inputValue.length;
                                    searchCounter += 1;

                                    const searchCounterPlural = searchCounter > 1 ? "workouts" : "workouts";

                                    if (inputValue.length >= 2 && inputValue.length < 25) {
                                        console.log(searchCounter);

                                        const icon = () => {
                                            if (workouts[x].platform == "PC (Windows)") {
                                                return `<i class="fa-brands fa-windows"></i>
                                                  `;
                                            } else if (games[x].platform == "Web Browser") {
                                                return `<i class="fa-regular fa-window-maximize"></i>`;
                                            } else {
                                                return `<i class="fa-brands fa-windows"></i> <i class="fa-regular fa-window-maximize"></i>`;
                                            }
                                        }


                                        document.getElementById("errorCatcher").innerText = "";
                                        document.getElementById("searchFieldInfo").innerHTML = `<h3 class="text-light">Found <span class="orangeText">${searchCounter}</span> ${searchCounterPlural} for <span class="orangeText">"${searchInputValue}"</span></h3>`;
                                        document.getElementById("searchField").innerHTML += `
                                        
                                        <small  class="col-lg-3 col-md-6 card-group p-2 rounded-0 text-start">
                                            <div class="card text-bg-dark shadow rounded-0 imgZoom" style="overflow: hidden;">
                                                <img src=${workouts[x].thumbnail} class="card-img-top rounded-0" alt="Loading...">
                                                <div class="card-img-overlay d-flex align-items-start rounded-0 cardOvrLay" style="
                                                height: 197px;">
                                                <small class="card-text mb-4 orangeBg ps-lg-2 pe-lg-2 p-lg-1 m-0">${workouts[x].genre}</small>
                                                </div>
                                                <div class="card-body d-grid">
                                                <small class="card-title fw-bold fs-5">${gworkouts[x].title}</small>
                                                <small class="card-text mb-4">${icon()} | ${workouts[x].release_date}</small>
                                                <small class="card-text">${workouts[x].short_description}</small>
                                                </div>
                                                <div class="card-footer d-flex justify-content-between align-items-center">
                                                <a class="cardLink aLink" href="${workouts[x].exercisedb_profile_url}">See more details</a>
                                                <div class="orangeText text-light rounded-1 border-0 p-lg-1 fw-bold ps-lg-2 pe-lg-2" >Free</div>
                                                </div>
                                            </div>
                                        </small>`


                                            ;
                                    }

                                }
                            }
                        }
                    }

                }
                workouts2 = workouts;

            }

        }
        displayWorkouts();
    }
    searchBtn();
}
document.getElementById("searchField").innerHTML = "";