const LOCALSTORAGE  = window.localStorage;
const STORAGE_VAR   = 'elogroup';

export const reset = async () => {
  try {
    return remove( STORAGE_VAR );
  } catch( e ){ return false; }
}

export const remove = () => {
  LOCALSTORAGE.removeItem( STORAGE_VAR );
  return true;
}

export const set = ( key, data ) => {
  try {
    const result = get( STORAGE_VAR );
    LOCALSTORAGE.setItem( STORAGE_VAR, JSON.stringify({ ...result, ...{[key]:data} }));

    return true;
  } catch( e ){ return false; }
}

export const get = ( specific = null ) => {
  try {
    const result    = LOCALSTORAGE.getItem( STORAGE_VAR )
    const response  = ( result ) ? JSON.parse( result ) : null;

    if( specific && response ){
      return ( specific in response ) ? response[ specific ] : null;
    }

    return response
  } catch( error ){
    console.warn( error );
    return null;
  }
}

export default {
  reset, remove, set, get
}