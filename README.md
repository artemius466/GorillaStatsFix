# Gorilla Server Stats Documentation

## Overview
The "Gorilla Server Stats" mod provides server statistics in the Gorilla Tag game. These stats include details like the lobby code, the number of players, the master client's nickname, the total number of players across all rooms, and the count of tags in the current room.

## Dependencies

- Utilla
- BepInEx
- [Honeylib](https://github.com/BzzzThe18th/HoneyLib/releases/tag/1.0.4)

## Installation

To install this mod, place it in the appropriate `BepInEx` plugins folder for Gorilla Tag.

## Features

### 1. Displaying Server Statistics

Once in a server room, a sign in the Forest location will display the following information:
- Lobby Code
- Number of Players in the Room
- Master Client's Nickname
- Total Number of Players across all rooms
- Number of Tags made by the user in the current room

### 2. Tracking Tags

The mod keeps track of the number of tags made by the user during their time in a room.

## Usage

### Initialization

On game initialization, the mod locates the sign in the Forest location and prepares it for updating the stats. If the sign isn't found, appropriate errors are logged.

### Displaying Stats

The mod constantly updates the sign with the current server statistics. If the player joins a new room or leaves a room, the mod updates the sign accordingly. If the player tags another player in an Infection game mode, the mod increments the tag count for the player.

## Methods and Functions

### `Awake()`
Invoked when the script instance is being loaded.

### `Start()`
Subscribes to the game initialization and infection tag events.

### `OnGameInitialized(object sender, EventArgs e)`
Finds the sign in the Forest location and prepares it for displaying stats.

### `UpdateSign()`
Coroutine that constantly updates the sign with the current server statistics.

### `OnEnable()`
Updates the sign with server stats when the mod is enabled.

### `OnDisable()`
Resets the sign to its default message when the mod is disabled.

### `Update()`
Constantly updates the sign with server statistics.

### `OnJoin(string gamemode)`
Updates the sign with server stats when the player joins a room.

### `OnLeave(string gamemode)`
Resets the sign to its default message when the player leaves a room.

### `InfectionTagEvent(object sender, InfectionTagEventArgs e)`
Updates the tag count and sign when the player tags another player in an Infection game mode.

## Notes

Make sure to have the required dependencies installed for this mod to function correctly. If you encounter issues or errors, check the game's console for any logs related to the mod.