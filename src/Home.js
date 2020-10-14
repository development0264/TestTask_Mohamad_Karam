import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FlatList from 'flatlist-react';
import './Home.css'
import { Postdata, Openpost, Userdata, DeletePost, CommentPost, Createpost } from './Actions/Homeaction';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const notes = useSelector(state => state);
  const dispatch = useDispatch()
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [opendialoguepost, setOpendialoguepost] = useState(false);
  const [clickpost, setclickpost] = useState({});
  const [userpost, setuserpost] = useState({});
  const [input, setinput] = useState("");
  const [inputtitle, setinputtitle] = useState("");
  const [inputbody, setiinputbody] = useState("");
  console.log("Notes", notes)

  const Commentview = () => {
    console.log("item ====> ", notes);

    if (notes.CommentData !== "") {
      console.log("ITEMDATA==>");
      return notes.CommentData.map((item) => {
        return (
          <div>
            <Typography>
              {item.body}
            </Typography>
          </div>
        )
      }
      )
    }

    return null;
  }

  useEffect(() => {
    dispatch(Postdata());
    dispatch(Userdata());
  }, [dispatch]);


  const deletepost = async (id) => {
    await dispatch(DeletePost(id));
    toast("Delete Post successfully");
    handleClose();
    await dispatch(Postdata());

  }

  const commentpost = (clickpost) => {
    if (clickpostdata.body == "") {
      toast("Please Enter the comment");
    }
    else {
      dispatch(CommentPost(clickpost));
      toast("Comment successfully Added !");
    }
  }

  const submitpost = (submitpostdata) => {

    if (submitpostdata.title == "") {
      toast("Please Enter the title");
    }
    else if (submitpostdata.body == "") {
      toast("Please Enter the body");
    }
    else {
      toast("Post Create successfully!");
      dispatch(Createpost(submitpostdata));
    }
  }


  function openpost(id, item, user) {
    dispatch(Openpost(id));
    setclickpost(item)
    setuserpost(user)
    handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClosePostDialogue = () => {
    setOpendialoguepost(false);
  };

  function renderPost(item) {
    var userData = null;
    console.log("notes==>", notes);
    if (notes.UserData !== '' && notes.PostData !== '') {
      notes.UserData.map(data => {
        if (item.userId === data.id) {
          userData = data;
        }
      })
    }

    return (
      <Card className={classes.root} variant="outlined" key={item.id}>
        <CardContent className="Card">
          <button onClick={() => { openpost(item.id, item, userData) }}>
            <Typography>
              {userData !== null ? userData.name : ""}
            </Typography>
            <label>
              {item.body}
            </label>
          </button>
        </CardContent>
      </Card>
    );
  }


  const clickpostdata = {
    title: clickpost.title,
    userId: clickpost.userId,
    id: clickpost.id,
    name: userpost.name,
    body: input
  }

  const submitpostdata = {
    userId: 10,
    title: inputtitle,
    body: inputbody
  }

  return (
    <div className="Home">
      <ToastContainer />
      <div className="header">
        <div className="header-inner">
          <a href="#">Create a message board</a>
          <Button color="inherit" onClick={() => { setOpendialoguepost(true) }}>
            Create POST
        </Button>
        </div>
      </div>

      <div className="box-wrap">
        <FlatList
          list={notes.PostData}
          renderItem={renderPost}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </div>
      <div>
        <Dialog fullScreen open={opendialoguepost} onClose={handleClosePostDialogue} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClosePostDialogue} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title1}>
                Create Post
            </Typography>
            </Toolbar>
          </AppBar>

          <div className="create-post-box">
            <input
              placeholder="Enter the title"
              value={inputtitle}
              onChange={(e) => setinputtitle(e.target.value)}
            />

            <input
              placeholder="Enter the body"
              value={inputbody}
              onChange={(e) => setiinputbody(e.target.value)}
            />


            <Button autoFocus color="inherit" onClick={() => { submitpost(submitpostdata) }}>
              Submit Post
          </Button>
          </div>

        </Dialog>
      </div>

      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title1}>
                Post
            </Typography>
              <Button autoFocus color="inherit" onClick={() => { deletepost(clickpost.id) }}>
                Delete
              </Button>
            </Toolbar>
          </AppBar>
          <div className="post-box-wrap">
            <List>
              <ListItem button>
                <ListItemText primary={userpost.name} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={clickpost.title} secondary={clickpost.body} />
              </ListItem>
            </List>

            <Commentview />
            <div className="create-post-box second-design">
              <input
                placeholder="Add Comment"
                value={input}
                onChange={(e) => setinput(e.target.value)}
              />

              <Button
                autoFocus color="inherit" onClick={() => { commentpost(clickpostdata) }}>
                Add Comment
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBar: {
    position: 'relative',
  },
  title1: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));