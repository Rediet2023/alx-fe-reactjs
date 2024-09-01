function ProfileDetails() {
  return <h3>Here are your profile details.</h3>;
}

function AnotherComponent() {
  return <h3>Another component in the same file.</h3>;
}

// Fix: Only one default export
export default ProfileDetails;

// Named export for other components
export { AnotherComponent };