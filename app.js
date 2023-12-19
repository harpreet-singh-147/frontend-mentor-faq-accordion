const questions = document.querySelectorAll('.accordion__qstn');

const toggleAccordion = question => {
  const activeQuestion = document.querySelector('.accordion__qstn.active');
  const accordionContent = question.nextElementSibling;
  const icon = question.querySelector('.accordion__icon');

  if (activeQuestion && activeQuestion !== question) {
    activeQuestion.classList.remove('active');
    activeQuestion.nextElementSibling.style.maxHeight = 0;
    const currentlyActiveIcon =
      activeQuestion.querySelector('.accordion__icon');
    currentlyActiveIcon.src = 'assets/images/icon-plus.svg';
    activeQuestion.setAttribute('aria-expanded', 'false');
    activeQuestion.nextElementSibling.setAttribute('aria-hidden', 'true');
  }

  if (question !== activeQuestion) {
    question.classList.add('active');
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    icon.src = 'assets/images/icon-minus.svg';
    question.setAttribute('aria-expanded', 'true');
    accordionContent.setAttribute('aria-hidden', 'false');
  } else {
    question.classList.remove('active');
    accordionContent.style.maxHeight = null;
    icon.src = 'assets/images/icon-plus.svg';
    question.setAttribute('aria-expanded', 'false');
    accordionContent.setAttribute('aria-hidden', 'true');
  }
};

questions.forEach(question => {
  question.addEventListener('click', () => toggleAccordion(question));

  question.addEventListener('keydown', e => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      toggleAccordion(question);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion__qstn').forEach(question => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.accordion__icon');

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.src = 'assets/images/icon-minus.svg';
      answer.setAttribute('aria-hidden', 'false');
      question.setAttribute('aria-expanded', 'true');
    } else {
      icon.src = 'assets/images/icon-plus.svg';
      answer.setAttribute('aria-hidden', 'true');
      question.setAttribute('aria-expanded', 'false');
    }
  });
});
