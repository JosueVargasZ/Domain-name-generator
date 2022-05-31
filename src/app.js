/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domains = [".com", ".net", ".us", ".io"];

const generateDomainNames = (pron, adj, noun, domain) => {
  for (let i = 0; i < adj.length; i++) {
    for (let j = 0; j < pron.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          // DOM output
          let list = document.querySelector("#list");
          let listItem = document.createElement("listItem");
          listItem.innerHTML = `${pron[j] +
            adj[i] +
            noun[k] +
            domain[l]} </br>`;
          list.appendChild(listItem);
          //console output
          console.log(pron[j] + adj[i] + noun[k] + domain[l]);
        }
      }
    }
  }
};

window.onload = () => {
  generateDomainNames(pronoun, adj, noun, domains);
};
