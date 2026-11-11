const projects = [
  {title:"Java Team Programming & Debugging",period:"August 2026 – Present",description:"Working with a five-person Intermediate Java team to write programs from scratch, troubleshoot errors, and compare results with course requirements.",image:"images/project1.jpg",alt:"Laptop showing stylized Java code and debugging tools",tags:["Java","Teamwork","Debugging"]},
  {title:"Media Conversion Web Application",period:"March – April 2025",description:"Integrated Node.js, yt-dlp, and FFmpeg into an HTML and JavaScript application for retrieving media metadata and producing MP3 or MP4 output with selectable quality settings.",image:"images/project2.jpg",alt:"Illustrated media conversion interface with audio and video file symbols",tags:["Node.js","JavaScript","FFmpeg"]},
  {title:"Personal Portfolio Website",period:"2026",description:"Designed a responsive, accessible portfolio with a dynamic project gallery, an interactive theme switch, and a validated contact form with email delivery and a local test option.",image:"images/project3.jpg",alt:"Illustration of a responsive portfolio shown on a laptop and phone",tags:["HTML","CSS","JavaScript"]}
];
const savedProjects = JSON.stringify(projects);
const portfolioProjects = JSON.parse(savedProjects);
const navigation = document.querySelector("#primary-navigation");
const menuButton = document.querySelector("#menu-button");
const menuLabel = document.querySelector("#menu-label");
const menuIcon = document.querySelector("#menu-icon");
const themeButton = document.querySelector("#theme-button");
const gallery = document.querySelector("#project-gallery");
const form = document.querySelector("#contact-form");
let menuOpen = false;
function setMenu(open){menuOpen=open;navigation.classList.toggle("open",open);menuButton.setAttribute("aria-expanded",String(open));menuLabel.textContent=open?"Close menu":"Menu";menuIcon.textContent=open?"×":"☰";}
function setTheme(theme){document.documentElement.dataset.theme=theme;themeButton.textContent=theme==="dark"?"☀ Light mode":"☾ Dark mode";themeButton.setAttribute("aria-label",theme==="dark"?"Switch to light theme":"Switch to dark theme");}
function renderProjects(items){gallery.replaceChildren();items.forEach((project)=>{const card=document.createElement("article");card.className="project-card";const photo=document.createElement("img");photo.src=project.image;photo.alt=project.alt;photo.loading="lazy";photo.width=960;photo.height=540;const body=document.createElement("div");body.className="project-body";const period=document.createElement("p");period.className="project-meta";period.textContent=project.period;const heading=document.createElement("h3");heading.textContent=project.title;const description=document.createElement("p");description.textContent=project.description;const tags=document.createElement("div");tags.className="tags";project.tags.forEach((tag)=>{const chip=document.createElement("span");chip.textContent=tag;tags.append(chip)});body.append(period,heading,description,tags);card.append(photo,body);gallery.append(card)});}
function showError(id,message){const field=document.getElementById(id);const error=document.getElementById(id==="full-name"?"name-error":id==="contact-consent"?"consent-error":id+"-error");field.setAttribute("aria-invalid","true");error.textContent=message;}
function resetErrors(){["full-name","email","topic","message","contact-consent"].forEach((id)=>{const field=document.getElementById(id);field.removeAttribute("aria-invalid")});document.querySelectorAll(".field-error").forEach((error)=>{error.textContent=""});}
function validateForm(requireConsent = true) {
  resetErrors();
  let valid = true;
  const name = document.querySelector("#full-name");
  const email = document.querySelector("#email");
  const topic = document.querySelector("#topic");
  const message = document.querySelector("#message");
  const consent = document.querySelector("#contact-consent");
  if (name.value.trim().length < 2 || name.value.length > name.maxLength) {
    showError("full-name", "Enter your name using 2–70 characters.");
    valid = false;
  }
  if (!email.validity.valid || !email.value.trim() || email.value.length > email.maxLength) {
    showError("email", "Enter a valid email address.");
    valid = false;
  }
  if (!topic.value) {
    showError("topic", "Select a reason for contacting.");
    valid = false;
  }
  if (message.value.trim().length < 10 || message.value.length > message.maxLength) {
    showError("message", "Write a message using 10–1,000 characters.");
    valid = false;
  }
  if (requireConsent && !consent.checked) {
    showError("contact-consent", "Please agree to the processing and email delivery of your message before sending.");
    valid = false;
  }
  return valid;
}
menuButton.addEventListener("click",()=>setMenu(!menuOpen));navigation.querySelectorAll("a").forEach((link)=>link.addEventListener("click",()=>{setMenu(false);const target=document.querySelector(link.getAttribute("href"));if(target)target.focus({preventScroll:true});}));
document.addEventListener("keydown",(event)=>{if(event.key==="Escape"&&menuOpen){setMenu(false);menuButton.focus();}});
window.addEventListener("resize",()=>{if(window.innerWidth>=1020)setMenu(false)});
themeButton.addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
const feedback = document.querySelector("#form-feedback");
const sendButton = document.querySelector("#send-button");
const validateButton = document.querySelector("#validate-button");
let submitting = false;
form.noValidate = true;
validateButton.hidden = false;
document.querySelector("#validation-help").hidden = false;

function updateFeedback(message, state) {
  feedback.className = state;
  feedback.textContent = message;
}

function focusFirstError() {
  const invalid = form.querySelector('[aria-invalid="true"]');
  if (invalid) invalid.focus();
}

function setSubmissionState(busy) {
  submitting = busy;
  sendButton.disabled = busy;
  validateButton.disabled = busy;
  sendButton.textContent = busy ? "Opening verification…" : "Send message";
  form.setAttribute("aria-busy", String(busy));
}

validateButton.addEventListener("click", () => {
  if (submitting) return;
  if (validateForm(false)) {
    updateFeedback("Your entries passed validation. Test only: no message was sent and no form data was submitted.", "success");
    feedback.focus();
  } else {
    updateFeedback("Please correct the fields identified below. Nothing was sent.", "error");
    focusFirstError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (submitting) return;
  if (!validateForm(true)) {
    updateFeedback("Please correct the fields identified below before sending.", "error");
    focusFirstError();
    return;
  }
  if (form.elements.namedItem("_honey").value) {
    updateFeedback("The form could not be submitted. Please use the Email me directly link instead.", "error");
    feedback.focus();
    return;
  }
  if (window.location.protocol === "file:") {
    updateFeedback("Email delivery is available on the published website. Open kailerf.github.io to send, or choose Test validation only here.", "error");
    feedback.focus();
    return;
  }
  if (!navigator.onLine) {
    updateFeedback("You appear to be offline. Reconnect and try again. Your entries are still here.", "error");
    feedback.focus();
    return;
  }
  const name = document.querySelector("#full-name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  name.value = name.value.trim();
  email.value = email.value.trim();
  message.value = message.value.trim();
  setSubmissionState(true);
  updateFeedback("Opening FormSubmit. Complete any security check there to submit your message.", "pending");
  try {
    HTMLFormElement.prototype.submit.call(form);
  } catch (error) {
    setSubmissionState(false);
    updateFeedback("The submission could not start. Your entries are still here. Try again or use the Email me directly link.", "error");
    feedback.focus();
  }
});

window.addEventListener("pageshow", () => {
  if (submitting) {
    setSubmissionState(false);
    updateFeedback("You returned to the contact form. Check the previous confirmation before sending again to avoid a duplicate message.", "pending");
  }
});
document.querySelector("#year").textContent=String(new Date().getFullYear());
setTheme("dark");renderProjects(portfolioProjects);
