import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Assad Farid</h2>
            <img
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/40400891_1927037460719560_1212096872521400320_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=L2Zy_CsHtkMAX8JFY55&_nc_ht=scontent-lht6-1.xx&oh=bb36c5f4bd7a81a6fbeb116817fc762d&oe=5EF22E05"
              alt="avatar"
              style={{ height: "250px" }}
            />

            <p style={{ width: "auto%", margin: "auto", paddingTop: '1em' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                {/* Phone */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (020) 7403-6520
                  </ListItemContent>
                  </ListItem>

                  {/* Facebook */}
                  <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                    (020) 7403-6520
                  </ListItemContent>
                  </ListItem>

                  {/* Instagram */}
                  <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                    (020) 7403-6520
                  </ListItemContent>
                  </ListItem>

                    {/* SnapChat */}
                    <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-snapchat" aria-hidden="true" />
                    (020) 7403-6520
                  </ListItemContent>
                  </ListItem>
                  

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
