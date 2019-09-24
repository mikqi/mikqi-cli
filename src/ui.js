#!/usr/bin/env node
'use strict'
const React = require('react')
const SelectInput = require('ink-select-input').default
const { render, Text, Box, Color } = require('ink')
const open = require('open')
const Link = require('ink-link')
const InkBox = require('ink-box')

/**
 * @typedef Item
 * @type {object}
 * @property {string} label - A label
 * @property {'url'|'action'} type - Type
 * @property {string} url - A URL
 * @property {Function} action - A function
 */

/**
 * Add key property to an items
 * @param {[Item]} items
 * @returns {[Item]}
 */
const createItems = items => {
  for (const item of items) {
    item.key = item.label
  }
  return items
}

const Intro = () => {
  /**
   * @type {[Item]}
   */
  const items = createItems([
    {
      label: 'Website',
      type: 'url',
      url: 'https://this.rivki.id'
    },
    {
      label: 'Github',
      type: 'url',
      url: 'https://github.com/mikqi'
    },
    {
      label: 'LinkedIn',
      type: 'url',
      url: 'https://www.linkedin.com/in/muhammadrivki/'
    },
    {
      label: 'Twitter',
      type: 'url',
      url: 'https://twitter.com/__mikqi'
    },
    {
      label: 'Exit',
      type: 'action',
      action: () => process.exit()
    }
  ])

  /**
   * Handle select
   * @param {Item} item
   */
  const handleSelect = item => {
    if (item.action) {
      item.action()
    }

    if (item.url) {
      open(item.url)
    }
  }

  return (
    <Box flexDirection="column">
      <InkBox borderStyle="round" borderColor="yellow" padding={1}>
        Hello my name is <Color yellowBright>Muhammad Rivki</Color> 😊
      </InkBox>
      <Box marginLeft={2} marginTop={1}>
        <Text>
          ► I’m a <Color yellowBright>Front-End Engineer</Color>
        </Text>
      </Box>
      <Box marginLeft={2} marginBottom={1}>
        <Text>
          ► Currently I am working at the most growing e-commerce company in Indonesia,{' '}
          <Link url="https://bukalapak.com/">
            <Color hex="#ea5164">Bukalapak</Color>
          </Link>
          .
        </Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  )
}

render(<Intro />)
