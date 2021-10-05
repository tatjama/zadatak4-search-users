const renderUserData = (data) => { 
  let arrayOfCompany;
    if(data.company) arrayOfCompany = data.company.split(',');
    main.innerHTML = `
    <main class="user-container">
      <!--Start First User Item-->
      <header class="user-container__item">
        <!--Start User Left-->
        <div class="user__left user__left--first">
          <img class="user__img" src=${data.avatar_url} alt="user ${data.name}">
        </div>
        <!--End User Left-->
        <!--Start First User Right-->
        <div class="user__right user__right--first">
          <section class="user">        
            <div class="user__data">
              <h1 class="user__name">${data.name? data.name: data.login}</h1>
              <h3 class="user__login">@${data.login}</h3>
            </div>
            <p class="user__joined">Joined <span class="user__date">
              ${new Date(data.created_at).toUTCString().slice(5,16)}</span></p>
          </section> 
        </div>
        <!--End First User Right-->
        </header>
        <!--End First User Item-->
        <!--Start Second User Item-->
        <section class="user-container__item user-container__item--second">
          <div class="user__left user__left--second"></div>
          <!--Start Second User Right-->
          <div class="user__right">
            <article class="user__bio">${(data.bio)?data.bio: "This profile has no bio"}
            </article>
            <!--Start User Status-->
            <section class="user__status">
                <div class="user__item user__item--repos">
                  <h4>Repos</h4>
                  <h2 class="user__quantity">${data.public_repos}</h2>
                </div>
                <div class="user__item user__item--followers">
                  <h4>Followers</h4>
                  <h2 class="user__quantity">${data.followers}</h2>
                </div>
                <div class="user__item user__item--following">
                  <h4>Following</h4>
                  <h2 class="user__quantity">${data.following}</h2>
                </div>
            </section>
            <!--End User Status-->
            <!--Start User Social-->
            <footer class="user-social">
              <div class="user-social__item ${!data.location && "user-social__item--transparent"}">
                <img class="user-social__img" src="./assets/icon-location.svg" alt="location ">
                <span>${data.location? data.location: "Not Available"}</span>
              </div>
              <div class="user-social__item ${!data.twitter_username && "user-social__item--transparent"}">
                <img class="user-social__img" src="./assets/icon-twitter.svg" alt="twitter ">
                <a class="user-social__a" 
                  href=${data.twitter_username? "https://twitter.com/" + data.twitter_username: "#"} 
                  target =${(!data.twitter_username)? "" : "_blank"}>
                  ${data.twitter_username? data.twitter_username: "Not Available"}
                </a>
              </div>
              <div class="user-social__item ${!data.blog && "user-social__item--transparent"}">
                <img class="user-social__img" src="./assets/icon-website.svg" alt="web site ">
                <a class="user-social__a" 
                  href=${data.blog? data.blog: "#"} 
                  target =${(data.blog) && "_blank"}>
                  ${data.blog? data.blog: "Not Available"}
                </a>
              </div>
              <div class="user-social__item ${!data.company && "user-social__item--transparent"}">
                <img class="user-social__img" src="./assets/icon-company.svg" alt="buildings ">  
                ${(data.company)? arrayOfCompany.map((company) =>{
                  company = company.trim();
                  return `<a class="user-social__a" 
                            href="https://github.com/${company.slice(1)}" 
                            target="_blank">
                            ${company}
                          </a><br>`
                }
                  ): "Not Available"}                
              </div>
            </footer>
            <!--End User Social-->
          </div>
          <!--End Second User Right-->
        </section>
        <!--End Second User Item-->
    </main>
    `;  
  }