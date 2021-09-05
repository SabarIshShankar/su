const moment = require('moment')

module.exports = {
  formatDate: function (date, format) {
    return moment(date).utc().format(format)
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' '
      new_str = str.substr(0, len)
      new_str = str.substr(0, new_str.lastIndexOf(' '))
      new_str = new_str.length > 0 ? new_str : str.substr(0, len)
      return new_str + '...'
    }
    return str
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue">
				<svg width="20" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="5" fill="white"/>
<path d="M7 27.7924V33H12.2076L27.5666 17.641L22.359 12.4334L7 27.7924ZM31.5938 13.6138C32.1354 13.0722 32.1354 12.1973 31.5938 11.6557L28.3443 8.40619C27.8027 7.8646 26.9278 7.8646 26.3862 8.40619L23.8449 10.9475L29.0525 16.1551L31.5938 13.6138V13.6138Z" fill="#AD90FF"/>
</svg></a>`
      } else {
        return `<a href="/stories/edit/${storyId}">
<svg width="20" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="5" fill="#5F509B"/>
<path d="M7 27.7924V33H12.2076L27.5666 17.641L22.359 12.4334L7 27.7924ZM31.5938 13.6138C32.1354 13.0722 32.1354 12.1973 31.5938 11.6557L28.3443 8.40619C27.8027 7.8646 26.9278 7.8646 26.3862 8.40619L23.8449 10.9475L29.0525 16.1551L31.5938 13.6138V13.6138Z" fill="white"/>
</svg>
</a>`
      }
    } else {
      return ''
    }
  },
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      )
  },
}