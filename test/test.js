import test from 'ava'
import * as shortenSteamGroupURL from '../src/app'

test('Shorten from URL with https', t => {
  t.is(shortenSteamGroupURL.fromURL('https://steamcommunity.com/groups/SteamDotGroup'), 'https://steam.group/SteamDotGroup')
})

test('Shorten from URL with http', t => {
  t.is(shortenSteamGroupURL.fromURL('http://steamcommunity.com/groups/SteamDotGroup'), 'https://steam.group/SteamDotGroup')
})

test('Shorten from URL without protocol', t => {
  t.is(shortenSteamGroupURL.fromURL('steamcommunity.com/groups/SteamDotGroup'), 'https://steam.group/SteamDotGroup')
})

test('Shorten from text with http', t => {
  t.is(
    shortenSteamGroupURL.fromText('You can find our Steam group here: http://steamcommunity.com/groups/SteamDotGroup have fun!'),
    'You can find our Steam group here: https://steam.group/SteamDotGroup have fun!'
  )
})

test('Shorten from text with https', t => {
  t.is(
    shortenSteamGroupURL.fromText('You can find our Steam group here: https://steamcommunity.com/groups/SteamDotGroup have fun!'),
    'You can find our Steam group here: https://steam.group/SteamDotGroup have fun!'
  )
})

test('Shorten from unorganized text with http', t => {
  t.is(
    shortenSteamGroupURL.fromText('You     can find our         Steam   group here: http://steamcommunity.com/groups/SteamDotGroup    have fun    !'),
    'You     can find our         Steam   group here: https://steam.group/SteamDotGroup    have fun    !'
  )
})

test('Shorten from unorganized text with https', t => {
  t.is(
    shortenSteamGroupURL.fromText('You     can find our         Steam   group here: http://steamcommunity.com/groups/SteamDotGroup    have fun    !'),
    'You     can find our         Steam   group here: https://steam.group/SteamDotGroup    have fun    !'
  )
})
