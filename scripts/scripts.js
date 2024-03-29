window.addEventListener("DOMContentLoaded", () => {  
    const emailBtn = document.getElementById('email-btn');
    
    addProjects();
    function addProjects() {
        
        // loop through each project
        for (let i = 0; i < projectsObjArray.length; ++i) {
            const containerElement = document.createElement('div');
            const infoContainerElement = document.createElement('div');
            const divElement = document.createElement('div');
            const titleDivElement = document.createElement('div');
            const repoElement = document.createElement('a');
            const descriptionElement = document.createElement('p');
            
            // array of spans for each projects skills
            let spanElementsArray = [];

            containerElement.setAttribute("class", "project-container");
            infoContainerElement.setAttribute("class", "info-project-container")
            titleDivElement.setAttribute("class", "title-div");
            divElement.setAttribute("class", "project-div");
            descriptionElement.append(projectsObjArray[i].description);
            
            // links for each project
            repoElement.setAttribute("class", "project-link");
            repoElement.setAttribute("id", projectsObjArray[i].id);
            repoElement.setAttribute("onclick", `window.open('${projectsObjArray[i].url}', '_blank')`);
            repoElement.innerText = projectsObjArray[i].name;

            // Append each part to the div and container
            titleDivElement.append(repoElement);  
            
            // if object has a live preview url, append it
            if (projectsObjArray[i].liveUrl !== null) {
                const liveElement = document.createElement('a');

                liveElement.setAttribute("class", "project-link");
                liveElement.setAttribute("onclick", `window.open('${projectsObjArray[i].liveUrl}', '_blank')`);
                liveElement.innerText = 'live preview';

                titleDivElement.append(liveElement);
            } 
            
            // loop through spans for each project
            for (let j = 0; j < projectsObjArray[i].skills.length; ++j) {
                const spanElement = document.createElement('span');
                spanElement.setAttribute("class", projectsObjArray[i].skills[j].skillType);

                // conditional to add comma or newline to end of skillName
                if (j === projectsObjArray[i].skills.length -1) {
                    spanElement.innerHTML = projectsObjArray[i].skills[j].skillName + '\n';
                }
                else {
                    spanElement.innerHTML = projectsObjArray[i].skills[j].skillName + ', ';
                }

                spanElementsArray.push(spanElement);
            }

            divElement.append(titleDivElement);
            // append spans to div
            for (let i = 0; i < spanElementsArray.length; ++i) {
                divElement.append(spanElementsArray[i]);
            }
            infoContainerElement.append(divElement);
            infoContainerElement.append(descriptionElement);
            containerElement.append(infoContainerElement);
            
            // if the project has a non null value in array object, create and append the image
            if (projectsObjArray[i].img !== null) {
                const websiteImg = document.createElement('img');

                websiteImg.src = projectsObjArray[i].img;
                websiteImg.setAttribute("class", "website-img");
                websiteImg.setAttribute("alt", projectsObjArray.imgAlt)
                
                containerElement.append(websiteImg);
            }
        
            document.getElementsByClassName('projects')[0].appendChild(containerElement);    
        }

    }


    // Copy Email
    if (emailBtn) {
        emailBtn.addEventListener('click', (event) => {
            copyURL();
            alert('email successfully copied');
        })
    }

    function copyURL() {
        let emailID = 'gavintaylor.ai@gmail.com'
        
        navigator.clipboard.writeText(emailID).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
})
