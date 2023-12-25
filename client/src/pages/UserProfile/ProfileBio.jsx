import React from 'react';

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="profile-bio">
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            <ul className="tags-list">
              {currentProfile?.tags.map((tag) => (
                <li key={tag}>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About me</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
