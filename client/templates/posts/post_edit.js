<template name="postEdit">
  <form class="main form page">
    <div class="form-group">
      <label class="control-label" for="url">URL</label>
      <div class="controls">
          <input name="url" id="url" type="text" value="{{url}}" placeholder="Your URL" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="title">Title</label>
      <div class="controls">
          <input name="title" id="title" type="text" value="{{title}}" placeholder="Name your post" class="form-control"/>
      </div>
    </div>
    <input type="submit" value="Submit" class="btn btn-primary submit"/>
    <hr/>
    <a class="btn btn-danger delete" href="#">Delete post</a>
  </form>
</template>
