window.addEventListener("DOMContentLoaded", () => {  
    // const projectLink = document.getElementsByClassName('project-link');
    const emailBtn = document.getElementById('email-btn');
    
    addProjects();
    function addProjects() {
        const projectSection = document.getElementsByClassName('projects');
        
        // loop through each project
        for (let i = 0; i < projectsObjArray.length; ++i) {
            const containerElement = document.createElement('div');
            const infoContainerElement = document.createElement('div');
            const divElement = document.createElement('div');
            const aElement = document.createElement('a');
            const descriptionElement = document.createElement('p');
            
            // array of spans for each projects skills
            let spanElementsArray = [];

            containerElement.setAttribute("class", "project-container");
            infoContainerElement.setAttribute("class", "info-project-container")
            divElement.setAttribute("class", "project-div");
            descriptionElement.append(projectsObjArray[i].description);
            
            // <a> element for each project
            aElement.setAttribute("class", "project-link");
            aElement.setAttribute("id", projectsObjArray[i].id);
            aElement.setAttribute("onclick", `window.open('${projectsObjArray[i].url}', '_blank')`);
            aElement.innerText = projectsObjArray[i].name;
            
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

            // Append each part to the div and container
            divElement.append(aElement);  
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
