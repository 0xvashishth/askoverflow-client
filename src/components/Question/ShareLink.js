import React from "react";
import './sharelinkcss.css';



const ShareLink = (props) => {
  const { mylink, mtype, aid } = props;
  let bookmarked = "#" + mtype + aid;

  return (
    <>
      <span className="fc-light mr2" data-toggle="modal" data-target={"#shareLink" + mylink + mtype + aid}><a href={"#" + mtype + aid}>share</a></span> &nbsp;


      <div class="modal fade" id={"shareLink" + mylink + mtype + aid} tabindex="-1" role="dialog" aria-labelledby="shareLinkTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="shareLinkLongTitle">share</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="mylist">
                <a class="btn btn-primary btncopy" href={bookmarked} onClick={() => navigator.clipboard.writeText(window.location.href)}><i class="fab fa fa-copy"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnfacebook" href={bookmarked} role="button" ><i class="fab fa-facebook-f"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btntwitter" href={bookmarked} role="button" ><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btngoogle" href={bookmarked} role="button" ><i class="fab fa-google"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btninstagram" href={bookmarked} role="button" ><i class="fab fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnlinkedin" href={bookmarked} role="button" ><i class="fab fa-linkedin-in"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnpinterest" href={bookmarked} role="button" ><i class="fab fa-pinterest"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnoverflow" href={bookmarked} role="button" ><i class="fab fa-stack-overflow"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnyoutube" href={bookmarked} role="button" ><i class="fab fa-youtube"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnslack" href={bookmarked} role="button" ><i class="fab fa-slack-hash"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btngithub" href={bookmarked} role="button" ><i class="fab fa-github"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btndribbble" href={bookmarked} role="button" ><i class="fab fa-dribbble"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnreddit" href={bookmarked} role="button" ><i class="fab fa-reddit-alien"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-primary btnwhatsapp" href={bookmarked} role="button" ><i class="fab fa-whatsapp"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareLink;