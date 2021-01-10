function ProfileImage({loading,isDrawing}) {
  return (
    <div
      id="profile-image"
      style={
        loading === "is-loading" || !isDrawing
          ? { opacity: 0, height: "0px", width: "0px" }
          : { opacity: 1, height: "65px" }
      }
    >
      <div className="layer"></div>
    </div>
  );
}
export default ProfileImage;