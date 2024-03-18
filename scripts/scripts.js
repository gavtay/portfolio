window.addEventListener("DOMContentLoaded", () => {  
    const emailBtn = document.getElementById('email-btn');
    
    addProjects();
    function addProjects() {
        const projectSection = document.getElementsByClassName('projects');
        
        // loop through each project
        for (let i = 0; i < projectsObjArray.length; ++i) {
            const fragment = document.createDocumentFragment();
            const paragraphElement = document.createElement('p');
            const spaceParaElement = document.createElement('p');
            const brElement = document.createElement('br');
            const aElement = document.createElement('a');
            
            // array of spans for each projects skills
            let spanElementsArray = [];
            
            // a element for each project
            aElement.setAttribute("class", "project-link");
            aElement.setAttribute("id", projectsObjArray[i].id);
            aElement.setAttribute("onclick", `window.open('${projectsObjArray[i].url}','_blank')`);
            aElement.innerText = projectsObjArray[i].name;
            
            // loop through spans for each project
            for (let j = 0; j < projectsObjArray[i].skills.length; ++j) {
                const spanElement = document.createElement('span');
                spanElement.setAttribute("class", projectsObjArray[i].skills[j].skillType);
                spanElement.innerHTML = projectsObjArray[i].skills[j].skillName;

                spanElementsArray.push(spanElement);
            }

            // add project description
            paragraphElement.innerText = projectsObjArray[i].description;
            spaceParaElement.innerText = ' - ';
            
            // fragment the elements to create a tree
            let proj = fragment
                .appendChild(aElement)
                // .appendChild(spaceParaElement)
                for (let i = 0; i < spanElementsArray.length; ++i) {
                    fragment.appendChild(spanElementsArray[i])
                }
                fragment.appendChild(paragraphElement);
            
            // document.getElementsByClassName('projects')[0].appendChild(paragraphElement);
            document.getElementsByClassName('projects')[0].appendChild(fragment);
            document.getElementsByClassName('projects')[0].appendChild(brElement);
            document.getElementsByClassName('projects')[0].appendChild(brElement);

            // if the project has a non null value in array object, create and append the image
            if (projectsObjArray[i].img !== null) {
                const websiteImg = document.createElement('img');
                websiteImg.src = projectsObjArray[i].img;
                websiteImg.setAttribute("class", "website-img");
                websiteImg.setAttribute("alt", projectsObjArray.imgAlt)
                
                document.getElementsByClassName('projects')[0].appendChild(websiteImg);
            }

            document.getElementsByClassName('projects')[0].appendChild(brElement);
            document.getElementsByClassName('projects')[0].appendChild(brElement);
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
