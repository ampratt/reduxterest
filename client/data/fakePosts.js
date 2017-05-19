import faker from 'faker'
import _ from 'lodash'

const codes = [
	  'BAPIPRjQce9',
      '-hZh6IQcfN',
      '-B3eiIwcYV',
      'BAhvZrRwcfu',
      'BAAJqbOQcW5',
      '_4jHytwcUA',
      '_zbaOlQcbn',
      '_rmvQfQce8',
      '_ep9kiQcVy',
      '_XpJcrwcSn',
      '_KnU7MwceA',
      '_HMejJQcY5',
      '_Fq2zmwcaz',
      '_A2r0aQcfD',
      '-1rhFawccs',
      '-pjx-gQcVi',
      '-oTZ0zQcWt',
      '-mxKQoQcQh',
      '-fasqlQceO',
      '-VBgtGQcSf',
      '-FpTyHQcau',
]

const posts = [
    {
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
  	{
      'code': _.sample(codes),
      'caption': faker.company.catchPhrase(),
      'likes': Math.floor(Math.random() * (85 - 0 + 1)) + 0,
      'id': Math.floor(Math.random() * 1000000000),
      'display_src':'http://lorempixel.com/1080/720/abstract/'
  	},
]

export default posts