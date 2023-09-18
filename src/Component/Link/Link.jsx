import PropTypes from 'prop-types';

const Link = ({route, index}) => {
  return (
    <ol className="mr-8 hover:bg-blue-800  "><a href="{route.path}">{index+1}. {route.name}</a></ol>   
  );
};

Link.propTypes ={
  route:PropTypes.object,
  index:PropTypes.number
}
export default Link;