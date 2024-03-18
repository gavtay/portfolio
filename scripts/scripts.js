window.addEventListener("DOMContentLoaded", () => {  
    const emailBtn = document.getElementById('email-btn');

    // projects object array
    const projectsObjArray = [
        {
            id: 'porfolio-website',
            class: 'project-link',
            url: "'https://github.com/gavtay/portfolio','_blank'",
            img: null,
            imgAlt: null,
            name: 'portfolio website',
            skills: ['HTML', 'CSS', 'JS'],
            description: 'static site showcasing my portfolio.'
        },
        {
            id: 'gym-website',
            class: 'project-link',
            url: "'https://github.com/gavtay/redlinetx','_blank'",
            img: './assets/gym-site.png',
            imgAlt: 'picture of gym website', 
            name: 'portfolio website',
            skills: ['CSS', 'React', 'JS'],
            description: 'static ReactJS site.'
        },
        {
            id: 'showfinder-website',
            class: 'project-link',
            url: "'https://github.com/gavtay/showfinder','_blank'",
            img: './assets/todo-site.png',
            imgAlt: 'picture of todo website',
            name: 'portfolio website',
            skills: ['CSS', 'React', 'JS', 'Redux'],
            description: 'webapp that allows one to create / select a login. once user is logged in, the user can scroll through various shows, categorized in several ways, with the ability to scroll. the user may also search, for specific shows. when desired, the user may sign out.'
        },
        {
            id: 'todo-website',
            class: 'project-link',
            url: "'https://github.com/gavtay/todoapp','_blank'",
            img: './assets/showfinder-site.png',
            imgAlt: 'picture of showfinder website',
            name: 'portfolio website',
            skills: ['CSS', 'React', 'JS', 'Redux'],
            description: 'todo list webapp with the ability to create, and delete projects as well as project list items. search function for projects. created with reactJS and redux.'
        }
    ];
    
    
    addProjects();
    function addProjects() {
        const projectSection = document.getElementsByClassName('projects');

        for (let i = 0; i < projectsObjArray.length; ++i) {
            const paragraphElement = document.createElement('p');
            const aElement = document.createElement('a');
            const spanElement = document.createElement('span');
            const brElement = document.createElement('br');
            
            
            
            paragraphElement.innerText = projectsObjArray[i].description;
            document.getElementsByClassName('projects')[0].appendChild(paragraphElement);

            document.getElementsByClassName('projects')[0].appendChild(brElement);

            if (projectsObjArray[i].img !== null) {
                const websiteImg = document.createElement('img');
                websiteImg.src = projectsObjArray[i].img;
                websiteImg.setAttribute("class", "website-img");
                websiteImg.setAttribute("alt", projectsObjArray.imgAlt)
                
                document.getElementsByClassName('projects')[0].appendChild(websiteImg);
            }

            document.getElementsByClassName('projects')[0].appendChild(brElement);
            document.getElementsByClassName('projects')[0].appendChild(brElement);

            console.log(projectSection);
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
