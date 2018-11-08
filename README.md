# DiscordChroma
a windows app that enables discord events to trigger razer chroma lighting on supported devices

Note: "selfbot's" (which is used here for connecting to discord) are against Discord their ToS,
there is a very small change that you get banned.
BUT thats not very likely because it only listens for events and doesn't do anything else in discord it self.
and my app would fall outside of their statement here Discord Support page,
judge for your self.
You have been warned.

# PLEASE READ

This project is now being worked on by Spooder (Spooder#1111) with full permission from DELUUXE (DELUUXE#1608)

# How to install

1. Download The exe file ( [Click Here For File](https://github.com/Dream-cake/DiscordChroma/releases/latest) )
2. Once downloaded it will ask you to login
3. Your all done (just make sure you open it every time you start your pc!)!


# PLEASE READ ASAP!!! TY

Self bots aren't supported. You shouldn't be going through the 2FA login flow on your bot either. Log in on the client, grab the token from local storage and use that token in your self bot.

Do not call /api/login or /api/auth/mfa/totp.

I repeat. Do not call /api/login or /api/auth/mfa/totp. If you are using a self bot on a 2fa enabled account, and you are automating the login and mfa flow. Your account will get banned. Instead, log in on the discord client, pop open the web inspector, (ctrl/cmd shift I), and type localStorage.token in the console to get your auth token. Pass this to the bot library instead, like you would a bot token. discord.py supports this as client.run('mfa.theTokenHere', bot=False).

Do NOT automate calling /api/login. and /api/auth/mfa/totp Your account will get banned.

- jhgg

AS OF RN ALL DEVLOPMENT IS ON HOLD UNTILL WE GET THIS FIXED
