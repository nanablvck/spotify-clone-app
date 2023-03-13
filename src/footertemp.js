<div className='footer'>
        <div className='footer__left'>
          <img className='footer__albumLogo' src='' alt=''/>
          <div className='footer__songInfo'>
            <h4>Yeah!</h4>
            <p>Usher</p>
          </div>
        </div>

        <div className='footer__center'>
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className='footer__icon '/>
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
        </div>

        <div className='footer__right'>

          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
          </Grid>
          <Grid item>
              <VolumeDownIcon />
          </Grid>
          <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

        </div>
    </div>
  );

  export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER DEVELOPING
    //token: "BQCpMbDX1-BR5N0ngc5OVjLs1SfCBQpUH3UFUIkoSvILuOipZTVWXZHALBQkFti0kfHixtmafZEm4WZFLLK2FZogftOwNLkJT8GP66hPYWo9MyJiumSA77LWUSp67nV6vTPmdqyYKRzmEk4yMZL8xaSf6xk-VV1h7rV6xAA-RYpxKg4XZWZg2DG84BicHx2gyAL_e1nwQtQpJJSqnhhDLg",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
            
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

            default:
                return state;
    }
};

export default reducer;