import "./loader.css";

function Loading(props) {
  const { isLoading } = props;
  return isLoading ? <span class="loader"></span> : <></>;
}

export default Loading;
