// const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/api/dashboard');
};

const postEditor = async function() {
  
  await fetch(`/api/dashboard/:id`, {
    method: "GET",
  });
}

// document
//   .querySelector('#edit-post-form')
//   .addEventListener('submit', editFormHandler);

// document
//   .querySelector('#delete-btn')
//   .addEventListener('click', deleteClickHandler);

document.querySelector("#user-card").addEventListener("click", postEditor)
