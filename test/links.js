var assert = require('assert');
import links from '../src/data/links'
import tags from '../src/data/tags'
import axios from 'axios'

describe('links', function () {

    links.forEach(function (link) {
        describe(`link ${link.name}`, function () {

            it('should have a name', function () {
                assert.ok(link.name)
            });

            it('should have a description', function () {
                assert.ok(link.description)
            });

            it('should have a link', function () {
                assert.ok(link.link)
            });

            it('should not end in slash', function () {
                assert.notEqual('/', link.link[link.link.length])
            });

            it('should not start with http://', function () {
                assert.ok(!link.link.startsWith('http://'))
            });

            it('should not start with https://', function () {
                assert.ok(!link.link.startsWith('https://'))
            });

            it('should be valid link', function () {
                return axios.get('https://' + link.link)
            });

            it(`should have valid tags: ${link.tags}`, function () {
                link.tags.forEach(function (tag) {
                    assert.notEqual(undefined, tags[tag])
                })
            });
        })

    })
});