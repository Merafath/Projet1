function wilderCard(wilder){

const html = `
<div class ="overlay-content">
    <div class="photo">
        <img src=${wilder.photo} alt="">
    </div>
    <div class="card-content">
        <div id ="prenomNom_wilder">${wilder.prenom} ${wilder.nom}</div>
        <div id="age_wilder">${wilder.age}</div>
        <div id="objpro_wilder">Objectif professionnel : </div><p>${wilder.objpro}</p>
        <div id="hobbies_wilder">Hobbies : </div><p>${wilder.hobbies}</p>
        <div id="citation_wilder">Citation : </div><p>${wilder.citation}</p>
        <div id="social_link">
            <a target ="_blank" href="${wilder.linkedin}"><img src="images/linkedin.png" id="linkedin_wilder"></a>
            <a target ="_blank" href="${wilder.github}"><img src="images/github.png" id="github_wilder"></a>
        </div>
    </div>
</div>`;
return html;

}

export default wilderCard;