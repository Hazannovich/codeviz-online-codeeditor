export const RouteIntroDiv = (props) => {
  return (
    <div
      className={`${props.transitionStage}`}
      onAnimationEnd={() => {
        if (props.transitionStage === "fadeOut") {
          props.setTransitionStage("fadeIn");
          props.setDisplayLocation(props.location);
        }
      }}
    >
      {props.children}
    </div>
  );
};
