import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [announcementText, setAnnouncementText] = useState('');
  const [supportPosts, setSupportPosts] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: '', content: '' });
  };

  const handleAnnouncementClick = () => {
    const dummyAnnouncement = "Tonight we will be having a speaker talking on ways of effectively tackling gambling addiction as from 1900 hours, our guest will be Dr. John Doe an expert in psychology studies" 
    setAnnouncementText(dummyAnnouncement);
  };

  const handleGeneralDiscussionClick = () => {
    setAnnouncementText('');
    
    // You can load actual posts for general discussion here
    setPosts([
      { title: "Announcement", content: ""}
    ]);
  };

  const handleSupportClick = () => {
    setSupportPosts([
      { title: "Support Request 1", content: "This is the content of support request 1" },
      { title: "Support Request 2", content: "This is the content of support request 2" },
    ]);
    setAnnouncementText(''); // Clear announcement text
    setPosts([]); // Clear existing posts
  };

  return (
    <div style={styles.forum}>
      <header>
        <h1 style={styles.header}>Community Forum</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.posts}>
            {announcementText ? (
              <div style={styles.post}>
                <h2>Announcement</h2>
                <p>{announcementText}</p>
              </div>
            ) : (
              supportPosts.length > 0 ? (
                supportPosts.map((post, index) => (
                  <div key={index} style={styles.post}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                ))
              ) : (
                posts.map((post, index) => (
                  <div key={index} style={styles.post}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                ))
              )
            )}
          </div>
          <aside style={styles.sidebar}>
            <h2>Categories</h2>
            <ul style={styles.categoryList}>
              <li><button style={styles.categoryButton} onClick={handleGeneralDiscussionClick}>General Discussion</button></li>
              <li><button style={styles.categoryButton} onClick={handleSupportClick}>Technical Support</button></li>
              <li><button style={styles.categoryButton} onClick={handleAnnouncementClick}>Announcements</button></li>
            </ul>
          </aside>
        </div>
        <div style={styles.newPost}>
          <h2>Add New Post</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                style={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Community Forum</p>
      </footer>
    </div>
  );
};

const styles = {
  forum: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  main: {
    flex: '1',
    overflowY: 'auto',
    padding: '20px',
    width: '100%',
  },
  container: {
    display: 'flex',
  },
  posts: {
    flex: '3',
    marginRight: '20px',
  },
  post: {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    flex: '1',
    marginLeft: '2rem',
  },
  categoryList: {
    listStyle: 'none',
    padding: '0',
  },
  newPost: {
    marginTop: '2rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
  },
  textarea: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  categoryButton:{
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: 1,
    width: '100%'

  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
  },
};

export default Forum;
