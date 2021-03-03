const icons = {
    arrowDown: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjUxNjUgNS40NTAwN0wwLjAxNTkxOTIgMC4yNDc1NjFMOS4wMTcwOSAwLjI0NzU2MUw0LjUxNjUgNS40NTAwN1oiIGZpbGw9IiM3NzhGQkIiLz4KPC9zdmc+Cg==",
    moveStart: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDggMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjk3ODMzIDUuMDc2MjFDMi45Nzg0MyA0LjkwODM4IDMuMDM2NzcgNC43NDA2MSAzLjE1MzA3IDQuNjEyNzNMNi44MTQ3NyAwLjU4ODY0MUM3LjA0NzcgMC4zMzI2NTYgNy40MjUxMSAwLjMzMjkwOSA3LjY1NzY1IDAuNTg5MjA1QzcuODkwMTkgMC44NDUzOTggNy44ODk5NCAxLjI2MDYgNy42NTcxMSAxLjUxNjYxTDQuNDE3MDMgNS4wNzcxN0w3LjY1Mjg0IDguNjQyMUM3Ljg4NTM3IDguODk4MzkgNy44ODUxMyA5LjMxMzU2IDcuNjUyMyA5LjU2OTQyQzcuNDE5NDYgOS44MjU1MyA3LjA0MjA1IDkuODI1MjcgNi44MDk0MiA5LjU2ODg1TDMuMTUyNDIgNS41Mzk5MkMzLjAzNjI0IDUuNDExODMgMi45NzgyMyA1LjI0Mzk4IDIuOTc4MzMgNS4wNzYyMVoiIGZpbGw9IiM3NzhGQkIiLz4KPHJlY3Qgd2lkdGg9IjEuMjA5ODMiIGhlaWdodD0iOS4zNjQ1MiIgcng9IjAuNjA0OTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAtMC4wMDA2NzIwNTIgMC4wMDA1ODE0OTYgLTEgMi4wNDIyNCA5LjYwNzQ4KSIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    moveEnd: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDggMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjUyODQ4IDQuOTgyQzUuNTI4NDggNS4xNDk4MyA1LjQ3MDIgNS4zMTc2NCA1LjM1Mzg3IDUuNDQ1NkwxLjY5MTU2IDkuNDcyMTRDMS40NTg1OSA5LjcyODI4IDEuMDgwODcgOS43MjgyOCAwLjg0Nzk5NiA5LjQ3MjE0QzAuNjE1MTIxIDkuMjE2MSAwLjYxNTEyMSA4LjgwMDkgMC44NDc5OTYgOC41NDQ3NEw0LjA4ODYxIDQuOTgyTDAuODQ4MTEgMS40MTkyNEMwLjYxNTIzNiAxLjE2MzEgMC42MTUyMzYgMC43NDc5NCAwLjg0ODExIDAuNDkxOTIzQzEuMDgwOTggMC4yMzU2NTkgMS40NTg3IDAuMjM1NjU5IDEuNjkxNjcgMC40OTE5MjNMNS4zNTM5OSA0LjUxODRDNS40NzAzMyA0LjY0NjQyIDUuNTI4NDggNC44MTQyMyA1LjUyODQ4IDQuOTgyWiIgZmlsbD0iIzc3OEZCQiIvPgo8cmVjdCB4PSI2LjQ2MjQiIHk9IjAuNDUwNSIgd2lkdGg9IjEuMjEwODEiIGhlaWdodD0iOS4zNjQ1MiIgcng9IjAuNjA1NDA2IiBmaWxsPSIjNzc4RkJCIi8+Cjwvc3ZnPgo=',
    prev: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjgyMDg2IDQuOTI1NDFDMC44MjA4NiA0Ljc1NzU4IDAuODgwOTQyIDQuNTg5NzcgMS4wMDA4NSA0LjQ2MTgxTDQuNzc2MDcgMC40MzUyNjlDNS4wMTYyMyAwLjE3OTEyOSA1LjQwNTU5IDAuMTc5MTI5IDUuNjQ1NjQgMC40MzUyNjlDNS44ODU3IDAuNjkxMzA2IDUuODg1NyAxLjEwNjUxIDUuNjQ1NjQgMS4zNjI2N0wyLjMwNTEyIDQuOTI1NDFMNS42NDU1MyA4LjQ4ODE2QzUuODg1NTggOC43NDQzIDUuODg1NTggOS4xNTk0NyA1LjY0NTUzIDkuNDE1NDhDNS40MDU0NyA5LjY3MTc1IDUuMDE2MTEgOS42NzE3NSA0Ljc3NTk2IDkuNDE1NDhMMS4wMDA3NCA1LjM4OTAxQzAuODgwODA2IDUuMjYwOTkgMC44MjA4NiA1LjA5MzE4IDAuODIwODYgNC45MjU0MVoiIGZpbGw9IiM3NzhGQkIiLz4KPC9zdmc+Cg==',
    next: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjAwNDgzIDUuMDE3OTVDNS4wMDQ4MyA1LjE4NTc4IDQuOTQ0NzUgNS4zNTM1OSA0LjgyNDg0IDUuNDgxNTVMMS4wNDk2MSA5LjUwODA5QzAuODA5NDU5IDkuNzY0MjMgMC40MjAwOTUgOS43NjQyMyAwLjE4MDA0MSA5LjUwODA5Qy0wLjA2MDAxMzUgOS4yNTIwNSAtMC4wNjAwMTM0IDguODM2ODUgMC4xODAwNDEgOC41ODA2OUwzLjUyMDU3IDUuMDE3OTVMMC4xODAxNTggMS40NTUxOUMtMC4wNTk4OTU4IDEuMTk5MDUgLTAuMDU5ODk1NyAwLjc4Mzg4NiAwLjE4MDE1OCAwLjUyNzg3QzAuNDIwMjEzIDAuMjcxNjA1IDAuODA5NTc3IDAuMjcxNjA1IDEuMDQ5NzMgMC41Mjc4N0w0LjgyNDk1IDQuNTU0MzVDNC45NDQ4OCA0LjY4MjM3IDUuMDA0ODMgNC44NTAxOCA1LjAwNDgzIDUuMDE3OTVaIiBmaWxsPSIjNzc4RkJCIi8+Cjwvc3ZnPgo=',
    filter: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjEuNTgxMDUiIHgyPSIxNi4xMTM5IiB5Mj0iMS41ODEwNSIgc3Ryb2tlPSIjMUNBRUE5Ii8+CjxsaW5lIHkxPSI2Ljc4MzIiIHgyPSIxNi4xMTM5IiB5Mj0iNi43ODMyIiBzdHJva2U9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjMuNTI0MzYiIGN5PSIxLjU2MDc1IiByeD0iMS41MTA2OCIgcnk9IjEuNTYwNzUiIGZpbGw9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjEyLjU4ODgiIGN5PSI2Ljc2MjkiIHJ4PSIxLjUxMDY5IiByeT0iMS41NjA3NSIgZmlsbD0iIzFDQUVBOSIvPgo8bGluZSB5MT0iMTEuOTg2MyIgeDI9IjE2LjExMzkiIHkyPSIxMS45ODYzIiBzdHJva2U9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjMuNTI0MzYiIGN5PSIxMS45NjYiIHJ4PSIxLjUxMDY4IiByeT0iMS41NjA3NSIgZmlsbD0iIzFDQUVBOSIvPgo8L3N2Zz4K',
    setting: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjE1NTkgOS40MTg5MUwxOS41ODY4IDguMDQwMjhDMTkuNTg2OCA4LjA0MDI4IDIwLjkwNzIgNC45OTY2MyAyMC43OTI2IDQuODc5NTJMMTkuMDQzOSAzLjEzNDY3QzE4LjkyMiAzLjAxNDM3IDE1Ljk0MDQgNC40MDI1OSAxNS45NDA0IDQuNDAyNTlMMTQuNTY0NyAzLjgzNTE3QzE0LjU2NDcgMy44MzUxNyAxMy4zNDY1IDAuNzUgMTMuMTgxOCAwLjc1SDEwLjcxMTlDMTAuNTQxIDAuNzUgOS40MTc1NSAzLjg0MzY4IDkuNDE3NTUgMy44NDM2OEw4LjA0Mjk2IDQuNDEzMjRDOC4wNDI5NiA0LjQxMzI0IDQuOTk3OCAzLjA5MTAyIDQuODgxMDggMy4yMDQ5M0wzLjEzMzM5IDQuOTU0MDVDMy4wMTI1MSA1LjA3NjQ3IDQuNDAzNzcgOC4wNTgzNyA0LjQwMzc3IDguMDU4MzdMMy44MzY4NSA5LjQzNzAxQzMuODM2ODUgOS40MzcwMSAwLjc1IDEwLjY0OTYgMC43NSAxMC44MTU2VjEzLjI4NzZDMC43NSAxMy40NTc5IDMuODQ0MTQgMTQuNTgzMiAzLjg0NDE0IDE0LjU4MzJMNC40MTIxMSAxNS45NTc2QzQuNDEyMTEgMTUuOTU3NiAzLjA5MDY3IDE5LjAwMzQgMy4yMDYzNSAxOS4xMjA1TDQuOTU2MTEgMjAuODY3NUM1LjA3Mzg4IDIwLjk4NTYgOC4wNTc1NSAxOS41OTUzIDguMDU3NTUgMTkuNTk1M0w5LjQzNDIzIDIwLjE2N0M5LjQzNDIzIDIwLjE2NyAxMC42NDk0IDIzLjI1IDEwLjgxNjEgMjMuMjVIMTMuMjg2QzEzLjQ1NTkgMjMuMjUgMTQuNTgyNCAyMC4xNTYzIDE0LjU4MjQgMjAuMTU2M0wxNS45NTgxIDE5LjU4NjhDMTUuOTU4MSAxOS41ODY4IDE4Ljk5OTEgMjAuOTA5IDE5LjExNjggMjAuNzk1MUwyMC44NjU2IDE5LjA0NkMyMC45ODU0IDE4LjkyNzggMTkuNTkzMSAxNS45NDM4IDE5LjU5MzEgMTUuOTQzOEwyMC4xNjIxIDE0LjU2NTFDMjAuMTYyMSAxNC41NjUxIDIzLjI1IDEzLjM0ODMgMjMuMjUgMTMuMTgyMlYxMC43MTI0QzIzLjI1MSAxMC41NDMxIDIwLjE1NTkgOS40MTg5MSAyMC4xNTU5IDkuNDE4OTFaTTEyIDE1LjYwNDJDMTAuMDE0NyAxNS42MDQyIDguMzk1MjEgMTMuOTg2IDguMzk1MjEgMTEuOTk4NEM4LjM5NTIxIDEwLjAxMyAxMC4wMTQ3IDguMzk0NzggMTIgOC4zOTQ3OEMxMy45ODg0IDguMzk0NzggMTUuNjA0OCAxMC4wMTMgMTUuNjA0OCAxMS45OTg0QzE1LjYwNDggMTMuOTg3IDEzLjk4ODQgMTUuNjA0MiAxMiAxNS42MDQyWiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    close: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjI1MSAwLjcwMzgyN0MxMi44NjE1IDAuMzE0OTI1IDEyLjIzMDYgMC4zMTQ5MjUgMTEuODQxIDAuNzAzODI3TDYuOTQ2NzIgNS41OUwyLjA1MjQxIDAuNzAzODI4QzEuNjYyODYgMC4zMTQ5MjUgMS4wMzE5NiAwLjMxNDkyNSAwLjY0MjQwOCAwLjcwMzgyN0MwLjI1MTk0IDEuMDkzNjUgMC4yNTE5NCAxLjcyNjM1IDAuNjQyNDA4IDIuMTE2MTdMNS41MzQzNyA3TDAuNjQyNDA4IDExLjg4MzhDMC4yNTE5NDEgMTIuMjczNiAwLjI1MTk0IDEyLjkwNjQgMC42NDI0MDggMTMuMjk2MkMxLjAzMTk2IDEzLjY4NTEgMS42NjI4NiAxMy42ODUxIDIuMDUyNDEgMTMuMjk2Mkw2Ljk0NjcyIDguNDFMMTEuODQxIDEzLjI5NjJDMTIuMjMwNiAxMy42ODUxIDEyLjg2MTUgMTMuNjg1MSAxMy4yNTEgMTMuMjk2MkMxMy42NDE1IDEyLjkwNjQgMTMuNjQxNSAxMi4yNzM2IDEzLjI1MSAxMS44ODM4TDguMzU5MDYgN0wxMy4yNTEgMi4xMTYxN0MxMy42NDE1IDEuNzI2MzYgMTMuNjQxNSAxLjA5MzY1IDEzLjI1MSAwLjcwMzgyN1oiIGZpbGw9IiM3NzhGQkIiLz4KPC9zdmc+Cg==',
    pined: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMDA2MjI3NDkgNi41NDE1OUMwLjAyNjgwNjggNi40NDA1NCAwLjA5NjExMTMgNi4zNTYzOCAwLjE5MDUzNSA2LjMxODI5QzEuMDIzMzkgNS45ODEzNCAxLjkwNjQ5IDUuODEwNTYgMi44MTUzMiA1LjgxMDU2QzQuMjMxOTYgNS44MTA1NiA1LjMyNTA5IDYuMjIxNTQgNS43NDcyNyA2LjQwNzA2TDEwLjI1MDIgMi41MTg3NkMxMC4wOTI5IDEuMTE1NjcgMTAuODM4NiAwLjE1NjExNiAxMC44NzE4IDAuMTE0MzQzQzEwLjkyNiAwLjA0NjQ2MTIgMTEuMDA1NiAwLjAwNDk5NTAxIDExLjA5MTMgOC4wNTA5MmUtMDVDMTEuMTc2NiAtMC4wMDE3NjI0MyAxMS4yNjEgMC4wMjgwMzE3IDExLjMyMTYgMC4wODk3NzAyTDE1LjkzOCA0Ljc3NTE0QzE1Ljk5OTEgNC44MzY4NyAxNi4wMzEyIDQuOTIyMjYgMTYuMDI2MSA1LjAxMDExQzE2LjAyMTIgNS4wOTczNCAxNS45Nzk4IDUuMTc4NzQgMTUuOTEyMyA1LjIzMzExQzE1LjI1MjIgNS43NjQ0OSAxNC40NDY2IDUuODc2MjkgMTMuODg3MyA1Ljg3NjI5QzEzLjc2MjYgNS44NzYyOSAxMy42NTYxIDUuODcwNDYgMTMuNTc0NyA1Ljg2NDAxTDkuNzI0NTQgMTAuNDU3MkM5Ljk4NzIzIDExLjE0MjIgMTAuNzg5OCAxMy42MTE3IDkuODE3NDUgMTYuMDg5NkM5Ljc3OTkzIDE2LjE4NTcgOS42OTczMSAxNi4yNTU3IDkuNTk3NDQgMTYuMjc2NkM5LjU3NzE2IDE2LjI4MDkgOS41NTY1OCAxNi4yODMxIDkuNTM2MyAxNi4yODMxQzkuNDU2NzEgMTYuMjgzMSA5LjM3OTU0IDE2LjI1MTEgOS4zMjIzNCAxNi4xOTMxTDQuOTEyOSAxMS43MTc4TDAuODA2MTAxIDE1Ljg4NTlDMC43NDcwODcgMTUuOTQ1OCAwLjY2OTYxMSAxNS45NzU5IDAuNTkyMTM1IDE1Ljk3NTlDMC41MTQ2NiAxNS45NzU5IDAuNDM3MTg0IDE1Ljk0NTggMC4zNzgxNyAxNS44ODU5QzAuMjU5ODM5IDE1Ljc2NTggMC4yNTk4MzkgMTUuNTcxNyAwLjM3ODE3IDE1LjQ1MTZMNC40ODQ5NyAxMS4yODM1TDAuMDg4NTQ0OCA2LjgyMTExQzAuMDE2NTE3NiA2Ljc0OCAtMC4wMTQzNTA5IDYuNjQyOTYgMC4wMDYyMjc0OSA2LjU0MTU5WiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    pin: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMDA2MjI3NDkgNi41NDE1OUMwLjAyNjgwNjggNi40NDA1NCAwLjA5NjExMTMgNi4zNTYzOCAwLjE5MDUzNSA2LjMxODI5QzEuMDIzMzkgNS45ODEzNCAxLjkwNjQ5IDUuODEwNTYgMi44MTUzMiA1LjgxMDU2QzQuMjMxOTYgNS44MTA1NiA1LjMyNTA5IDYuMjIxNTQgNS43NDcyNyA2LjQwNzA2TDEwLjI1MDIgMi41MTg3NkMxMC4wOTI5IDEuMTE1NjcgMTAuODM4NiAwLjE1NjExNiAxMC44NzE4IDAuMTE0MzQzQzEwLjkyNiAwLjA0NjQ2MTIgMTEuMDA1NiAwLjAwNDk5NTAxIDExLjA5MTMgOC4wNTA5MmUtMDVDMTEuMTc2NiAtMC4wMDE3NjI0MyAxMS4yNjEgMC4wMjgwMzE3IDExLjMyMTYgMC4wODk3NzAyTDE1LjkzOCA0Ljc3NTE0QzE1Ljk5OTEgNC44MzY4NyAxNi4wMzEyIDQuOTIyMjYgMTYuMDI2MSA1LjAxMDExQzE2LjAyMTIgNS4wOTczNCAxNS45Nzk4IDUuMTc4NzQgMTUuOTEyMyA1LjIzMzExQzE1LjI1MjIgNS43NjQ0OSAxNC40NDY2IDUuODc2MjkgMTMuODg3MyA1Ljg3NjI5QzEzLjc2MjYgNS44NzYyOSAxMy42NTYxIDUuODcwNDYgMTMuNTc0NyA1Ljg2NDAxTDkuNzI0NTQgMTAuNDU3MkM5Ljk4NzIzIDExLjE0MjIgMTAuNzg5OCAxMy42MTE3IDkuODE3NDUgMTYuMDg5NkM5Ljc3OTkzIDE2LjE4NTcgOS42OTczMSAxNi4yNTU3IDkuNTk3NDQgMTYuMjc2NkM5LjU3NzE2IDE2LjI4MDkgOS41NTY1OCAxNi4yODMxIDkuNTM2MyAxNi4yODMxQzkuNDU2NzEgMTYuMjgzMSA5LjM3OTU0IDE2LjI1MTEgOS4zMjIzNCAxNi4xOTMxTDQuOTEyOSAxMS43MTc4TDAuODA2MTAxIDE1Ljg4NTlDMC43NDcwODcgMTUuOTQ1OCAwLjY2OTYxMSAxNS45NzU5IDAuNTkyMTM1IDE1Ljk3NTlDMC41MTQ2NiAxNS45NzU5IDAuNDM3MTg0IDE1Ljk0NTggMC4zNzgxNyAxNS44ODU5QzAuMjU5ODM5IDE1Ljc2NTggMC4yNTk4MzkgMTUuNTcxNyAwLjM3ODE3IDE1LjQ1MTZMNC40ODQ5NyAxMS4yODM1TDAuMDg4NTQ0OCA2LjgyMTExQzAuMDE2NTE3NiA2Ljc0OCAtMC4wMTQzNTA5IDYuNjQyOTYgMC4wMDYyMjc0OSA2LjU0MTU5WiIgZmlsbD0iIzdGOEZBNCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg==',
    eye: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAxNjcgMTQuMjQ4MkM4LjM3MzgyIDE0LjI2OSA2Ljc0Nzk0IDEzLjkwODggNS4yNjI3NiAxMy4xOTQ5QzQuMTExNTQgMTIuNjI0MiAzLjA3Nzc4IDExLjgzNjEgMi4yMTY2OSAxMC44NzI2QzEuMzA0NiA5Ljg3NjQyIDAuNTg2NDQ0IDguNzEzNzcgMC4xMDAxNjcgNy40NDYxMUwwIDcuMTI0NTJMMC4xMDUxNzUgNi44MDI5NEMwLjU5MTgwMSA1LjUzNjM4IDEuMzA4NDEgNC4zNzQwNCAyLjIxNzY5IDMuMzc2NDVDMy4wNzg0NyAyLjQxMzA0IDQuMTExODggMS42MjQ5MSA1LjI2Mjc2IDEuMDU0MTNDNi43NDc5NSAwLjM0MDMzIDguMzczODIgLTAuMDE5OTAxMSAxMC4wMTY3IDAuMDAwODQ4MDk1QzExLjY1OTUgLTAuMDE5ODY1MyAxMy4yODU0IDAuMzQwMzY0IDE0Ljc3MDYgMS4wNTQxM0MxNS45MjE4IDEuNjI0NzggMTYuOTU1NiAyLjQxMjkyIDE3LjgxNjcgMy4zNzY0NUMxOC43MzA1IDQuMzcxMjggMTkuNDQ4OSA1LjUzNDI4IDE5LjkzMzIgNi44MDI5NEwyMC4wMzM0IDcuMTI0NTJMMTkuOTI4MiA3LjQ0NjExQzE4LjM1NjggMTEuNjAyIDE0LjM5ODIgMTQuMzE4OCAxMC4wMTY3IDE0LjI0ODJaTTEwLjAxNjcgMi4wMzUzNEM2LjYwNjg3IDEuOTI2NzggMy40NzcyMSAzLjk0NDQxIDIuMTIwNTMgNy4xMjQ1MkMzLjQ3Njk5IDEwLjMwNDggNi42MDY3OSAxMi4zMjE3IDEwLjAxNjcgMTIuMjEyOUMxMy40MjY0IDEyLjMyMTEgMTYuNTU1OSAxMC4zMDQ0IDE3LjkxMjggNy4xMjQ1MkMxNi41NTc5IDMuOTQyODcgMTMuNDI3MSAxLjkyNDQ5IDEwLjAxNjcgMi4wMzUzNFpNMTAuMDE2NyAxMC4xNzc1QzguNTcxNiAxMC4xODcyIDcuMzIxNTYgOS4xNTcxNyA3LjAzMjY3IDcuNzE4NjFDNi43NDM3OSA2LjI4MDA1IDcuNDk2NzUgNC44MzQ3OSA4LjgzMDA5IDQuMjY4NkMxMC4xNjM0IDMuNzAyNDEgMTEuNzA0NyA0LjE3MzQyIDEyLjUwOTQgNS4zOTI5N0MxMy4zMTQgNi42MTI1MSAxMy4xNTczIDguMjM5OTcgMTIuMTM1MiA5LjI3NzkxQzExLjU3NTYgOS44NTMxNSAxMC44MTI4IDEwLjE3NzEgMTAuMDE2NyAxMC4xNzc1WiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    noneEye: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDE4LjcwNzhMMTQuNjM4NCAxNS4yOTI1QzEzLjE4ODEgMTUuOTYzNCAxMS42MTAxIDE2LjMwMTQgMTAuMDE2NyAxNi4yODI3QzguMzczODIgMTYuMzAzNCA2Ljc0Nzk1IDE1Ljk0MzIgNS4yNjI3NiAxNS4yMjk0QzQuMTExNTMgMTQuNjU4NyAzLjA3Nzc2IDEzLjg3MDYgMi4yMTY2OSAxMi45MDcxQzEuMzAyNjYgMTEuOTExNiAwLjU4NDI3IDEwLjc0NzkgMC4xMDAxNjcgOS40Nzg1NUwwIDkuMTU5MDFMMC4xMDUxNzUgOC44Mzc0MkMwLjgyOTE5MSA2Ljk2MTE0IDIuMDQ3NjcgNS4zMjM1OSAzLjYyNzA0IDQuMTA0MjVMMS4wMDE2NyAxLjQzNjk1TDIuNDE3MDIgMEwxOS40MTQzIDE3LjI2ODhMMTguMDAyIDE4LjcwNzhIMThaTTUuMDQ0NCA1LjU0NTI3QzMuNzY0MTkgNi40NTcwMSAyLjc1MzIzIDcuNzA2NSAyLjEyMDUzIDkuMTU5MDFDMy40NzcyMSAxMi4zMzkxIDYuNjA2ODcgMTQuMzU1OSAxMC4wMTY3IDE0LjI0NzNDMTEuMDY4MyAxNC4yNTYxIDEyLjExMzcgMTQuMDg0MSAxMy4xMDg4IDEzLjczODVMMTEuMzA1OCAxMS45MDY3QzEwLjkwNDUgMTIuMTA2NiAxMC40NjM2IDEyLjIxMSAxMC4wMTY3IDEyLjIxMkM4LjM2MTM4IDEyLjIwMTUgNy4wMjIwNiAxMC44NDA3IDcuMDExNjcgOS4xNTkwMUM3LjAxMjE1IDguNzAzODcgNy4xMTQ5MyA4LjI1NDg2IDcuMzEyMTcgNy44NDYyMkw1LjA0NDQgNS41NDUyN1pNMTcuODgxOCAxMi44MzI4TDE2LjQ4NzUgMTEuNDE3MkMxNy4wNzQxIDEwLjc0MzQgMTcuNTU0OCA5Ljk4MTc0IDE3LjkxMjggOS4xNTkwMUMxNi41NTc5IDUuOTc3MzUgMTMuNDI3MSAzLjk1OTgyIDEwLjAxNjcgNC4wNzA2N0M5Ljc2OTI3IDQuMDcwNjcgOS41MjA4NSA0LjA3OTgzIDkuMjgwNDUgNC4wOTcxM0w3LjUxMjUxIDIuMjk4OTFDOC4zMzU1MSAyLjEyMDA0IDkuMTc1MDcgMi4wMzE2NyAxMC4wMTY3IDIuMDM1MzNDMTEuNjU5NSAyLjAxNDYyIDEzLjI4NTQgMi4zNzQ4NSAxNC43NzA2IDMuMDg4NjJDMTUuOTIxOCAzLjY1OTI2IDE2Ljk1NTYgNC40NDc0IDE3LjgxNjcgNS40MTA5NEMxOC43MzAzIDYuNDA1MTYgMTkuNDQ4NiA3LjU2NzQ1IDE5LjkzMzIgOC44MzUzOUwyMC4wMzM0IDkuMTU5MDFMMTkuOTI4MiA5LjQ4MDU5QzE5LjQ1OTIgMTAuNzIwMiAxOC43NjU0IDExLjg1OTMgMTcuODgyOCAxMi44Mzg5TDE3Ljg4MTggMTIuODMyOFoiIGZpbGw9IiM3RjhGQTQiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo=',
    sort: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDkgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjAwNjUyIDBMLTAuMDAwMTUyNTg4IDQuMDcwNjhMOC4wMTMxOCA0LjA3MDY4TDQuMDA2NTIgMFoiIGZpbGw9IiM3NzhGQkIiLz4KPHBhdGggZD0iTTQuMDA2NjcgMTAuNjg1NUw4LjAxMzM0IDYuNjE0ODdMMCA2LjYxNDg3TDQuMDA2NjcgMTAuNjg1NVoiIGZpbGw9IiM3NzhGQkIiLz4KPC9zdmc+Cg==',
    checked: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIxIiBoZWlnaHQ9IjIxIiByeD0iNCIgZmlsbD0iIzFDQUVBOSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTguOTc3OTMgMTUuMzU2NEM4Ljg1Mzg0IDE1LjQ4MTIgOC42ODQ1NCAxNS41NTA4IDguNTA4NjcgMTUuNTUwOEM4LjMzMjggMTUuNTUwOCA4LjE2MzQ5IDE1LjQ4MTIgOC4wMzk0IDE1LjM1NjRMNC4yOTE3IDExLjYwODFDMy45MDI3NyAxMS4yMTkxIDMuOTAyNzcgMTAuNTg4NSA0LjI5MTcgMTAuMjAwM0w0Ljc2MDk3IDkuNzMwODhDNS4xNTAwMiA5LjM0MTk1IDUuNzc5OTYgOS4zNDE5NSA2LjE2ODg5IDkuNzMwODhMOC41MDg2NyAxMi4wNzA4TDE0LjgzMTEgNS43NDgyNEMxNS4yMjAxIDUuMzU5MzEgMTUuODUwNyA1LjM1OTMxIDE2LjIzOSA1Ljc0ODI0TDE2LjcwODMgNi4yMTc2M0MxNy4wOTcyIDYuNjA2NTYgMTcuMDk3MiA3LjIzNzExIDE2LjcwODMgNy42MjU0M0w4Ljk3NzkzIDE1LjM1NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEzIiBoZWlnaHQ9IjEzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCA0KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=',
    uncheck: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNEMwIDEuNzkwODYgMS43OTA4NiAwIDQgMEgxN0MxOS4yMDkxIDAgMjEgMS43OTA4NiAyMSA0VjE3QzIxIDE5LjIwOTEgMTkuMjA5MSAyMSAxNyAyMUg0QzEuNzkwODYgMjEgMCAxOS4yMDkxIDAgMTdWNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTAuNSA0QzAuNSAyLjA2NyAyLjA2NyAwLjUgNCAwLjVIMTdDMTguOTMzIDAuNSAyMC41IDIuMDY3IDIwLjUgNFYxN0MyMC41IDE4LjkzMyAxOC45MzMgMjAuNSAxNyAyMC41SDRDMi4wNjcgMjAuNSAwLjUgMTguOTMzIDAuNSAxN1Y0WiIgc3Ryb2tlPSIjN0Y4RkE0IiBzdHJva2Utb3BhY2l0eT0iMC4zNSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTAuNSIgeTE9IjIxIiB4Mj0iMTAuNSIgeTI9Ii00LjQ3MDM1ZS0wOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjJGNEY4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
    remove: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuMTQ2NDQ3IDAuMTQ2NDQ3QzAuMzQxNzA5IC0wLjA0ODgxNTUgMC42NTgyOTEgLTAuMDQ4ODE1NSAwLjg1MzU1MyAwLjE0NjQ0N0w0LjMzMzMzIDMuNjI2MjNMNy44MTMxMSAwLjE0NjQ0N0M4LjAwODM3IC0wLjA0ODgxNTUgOC4zMjQ5NiAtMC4wNDg4MTU1IDguNTIwMjIgMC4xNDY0NDdDOC43MTU0OCAwLjM0MTcwOSA4LjcxNTQ4IDAuNjU4MjkxIDguNTIwMjIgMC44NTM1NTNMNS4wNDA0NCA0LjMzMzMzTDguNTIwMjIgNy44MTMxMUM4LjcxNTQ4IDguMDA4MzcgOC43MTU0OCA4LjMyNDk2IDguNTIwMjIgOC41MjAyMkM4LjMyNDk2IDguNzE1NDggOC4wMDgzNyA4LjcxNTQ4IDcuODEzMTEgOC41MjAyMkw0LjMzMzMzIDUuMDQwNDRMMC44NTM1NTMgOC41MjAyMkMwLjY1ODI5MSA4LjcxNTQ4IDAuMzQxNzA5IDguNzE1NDggMC4xNDY0NDcgOC41MjAyMkMtMC4wNDg4MTU1IDguMzI0OTYgLTAuMDQ4ODE1NSA4LjAwODM3IDAuMTQ2NDQ3IDcuODEzMTFMMy42MjYyMyA0LjMzMzMzTDAuMTQ2NDQ3IDAuODUzNTUzQy0wLjA0ODgxNTUgMC42NTgyOTEgLTAuMDQ4ODE1NSAwLjM0MTcwOSAwLjE0NjQ0NyAwLjE0NjQ0N1oiIGZpbGw9IiMxQ0FFQTkiLz4KPC9zdmc+Cg==',
    removeBG: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiNEMkVGRUUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjE2ODk4IDUuMTY4OThDNS4zOTQyOCA0Ljk0MzY3IDUuNzU5NTcgNC45NDM2NyA1Ljk4NDg3IDUuMTY4OThMMTAgOS4xODQxMUwxNC4wMTUxIDUuMTY4OThDMTQuMjQwNCA0Ljk0MzY3IDE0LjYwNTcgNC45NDM2NyAxNC44MzEgNS4xNjg5OEMxNS4wNTYzIDUuMzk0MjggMTUuMDU2MyA1Ljc1OTU3IDE0LjgzMSA1Ljk4NDg3TDEwLjgxNTkgMTBMMTQuODMxIDE0LjAxNTFDMTUuMDU2MyAxNC4yNDA0IDE1LjA1NjMgMTQuNjA1NyAxNC44MzEgMTQuODMxQzE0LjYwNTcgMTUuMDU2MyAxNC4yNDA0IDE1LjA1NjMgMTQuMDE1MSAxNC44MzFMMTAgMTAuODE1OUw1Ljk4NDg3IDE0LjgzMUM1Ljc1OTU3IDE1LjA1NjMgNS4zOTQyOCAxNS4wNTYzIDUuMTY4OTggMTQuODMxQzQuOTQzNjcgMTQuNjA1NyA0Ljk0MzY3IDE0LjI0MDQgNS4xNjg5OCAxNC4wMTUxTDkuMTg0MTEgMTBMNS4xNjg5OCA1Ljk4NDg3QzQuOTQzNjcgNS43NTk1NyA0Ljk0MzY3IDUuMzk0MjggNS4xNjg5OCA1LjE2ODk4WiIgZmlsbD0iIzFDQUVBOSIvPgo8L3N2Zz4K',
    open: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUzMTIgMEwxMC40Mzc1IDAuMDMxMjVDMTAuMTg3NSAwLjAzMTI1IDEwIDAuMjE4NzUgMTAgMC40Njg3NVYxLjVDMTAgMS43NSAxMC4xODc1IDEuOTY4NzUgMTAuNDM3NSAxLjk2ODc1TDEyLjc1IDEuODc1TDEyLjgxMjUgMS45Mzc1TDQuMDkzNzUgMTAuNjU2MkM0LjAzMTI1IDEwLjcxODggMy45Njg3NSAxMC44MTI1IDMuOTY4NzUgMTAuOTA2MkMzLjk2ODc1IDExLjAzMTIgNC4wMzEyNSAxMS4xMjUgNC4wOTM3NSAxMS4xODc1TDQuODEyNSAxMS45MDYyQzQuODc1IDExLjk2ODggNC45Njg3NSAxMi4wMzEyIDUuMDkzNzUgMTIuMDMxMkM1LjE4NzUgMTIuMDMxMiA1LjI4MTI1IDExLjk2ODggNS4zNDM3NSAxMS45MDYyTDE0LjA2MjUgMy4xODc1TDE0LjEyNSAzLjI1TDE0LjAzMTIgNS41NjI1QzE0LjAzMTIgNS44MTI1IDE0LjI1IDYuMDMxMjUgMTQuNSA2LjAzMTI1VjZIMTUuNTMxMkMxNS43ODEyIDYgMTUuOTY4OCA1LjgxMjUgMTUuOTY4OCA1LjU2MjVMMTYgMC40Njg3NUMxNiAwLjIxODc1IDE1Ljc4MTIgMCAxNS41MzEyIDBaTTEzLjUgOUgxM0MxMi43MTg4IDkgMTIuNSA5LjI1IDEyLjUgOS41VjE0LjMxMjVDMTIuNSAxNC40Mzc1IDEyLjQwNjIgMTQuNSAxMi4zMTI1IDE0LjVIMS42ODc1QzEuNTYyNSAxNC41IDEuNSAxNC40Mzc1IDEuNSAxNC4zMTI1VjMuNjg3NUMxLjUgMy41OTM3NSAxLjU2MjUgMy41IDEuNjg3NSAzLjVINi41QzYuNzUgMy41IDcgMy4yODEyNSA3IDNWMi41QzcgMi4yNSA2Ljc1IDIgNi41IDJIMS41QzAuNjU2MjUgMiAwIDIuNjg3NSAwIDMuNVYxNC41QzAgMTUuMzQzOCAwLjY1NjI1IDE2IDEuNSAxNkgxMi41QzEzLjMxMjUgMTYgMTQgMTUuMzQzOCAxNCAxNC41VjkuNUMxNCA5LjI1IDEzLjc1IDkgMTMuNSA5WiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    edit: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWMi4yNUMwIDEuNDIxNTcgMC42NzE1NzMgMC43NSAxLjUgMC43NUg3LjVMNiAyLjI1SDEuNVYxMC41SDkuNzVWNkwxMS4yNSA0LjVWMTAuNUMxMS4yNSAxMS4zMjg0IDEwLjU3ODQgMTIgOS43NSAxMloiIGZpbGw9IiM3NzhGQkIiLz4KPHBhdGggZD0iTTUuNjIxODYgNi43NUM1LjUxNzk2IDYuNzQ5ODIgNS40MTg5MSA2LjcwNiA1LjM0ODg4IDYuNjI5MjJDNS4yNzc1NyA2LjU1MzA3IDUuMjQyMTMgNi40NTAxIDUuMjUxNDcgNi4zNDYxN0w1LjM0MjIyIDUuMzQ4MDhMOS41MzQyNCAxLjE1NjM5TDEwLjg0NDMgMi40NjY0M0w2LjY1MzM4IDYuNjU3NzVMNS42NTU1NiA2Ljc0ODUyQzUuNjQ0MDggNi43NDk2MyA1LjYzMjYgNi43NSA1LjYyMTg2IDYuNzVaTTExLjEwNTggMi4yMDQ1TDkuNzk2MSAwLjg5NDQ2MUwxMC41ODE3IDAuMTA4NjU5QzEwLjY1MTIgMC4wMzkwODk5IDEwLjc0NTQgMCAxMC44NDM3IDBDMTAuOTQyIDAgMTEuMDM2MyAwLjAzOTA4OTkgMTEuMTA1OCAwLjEwODY1OUwxMS44OTE0IDAuODk0NDYxQzExLjk2MDkgMC45NjM5NTIgMTIgMS4wNTgyNSAxMiAxLjE1NjU4QzEyIDEuMjU0OTEgMTEuOTYwOSAxLjM0OTIxIDExLjg5MTQgMS40MTg3TDExLjEwNTggMi4yMDQ1WiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    add: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTE2LjEwNzEgMTEuMzg3OEgxMy4wNzE0QzEyLjk3MjggMTEuMzg3OCAxMi44OTI5IDExLjMwOTkgMTIuODkyOSAxMS4yMTM5VjguMjU4OEMxMi44OTI5IDcuNzc4ODIgMTIuNDkzMSA3LjM4OTY1IDEyIDcuMzg5NjVDMTEuNTA2OSA3LjM4OTY1IDExLjEwNzEgNy43Nzg4MiAxMS4xMDcxIDguMjU4OFYxMS4yMTM5QzExLjEwNzEgMTEuMzA5OSAxMS4wMjcyIDExLjM4NzggMTAuOTI4NiAxMS4zODc4SDcuODkyODZDNy4zOTk3OCAxMS4zODc4IDcgMTEuNzc2OSA3IDEyLjI1NjlDNyAxMi43MzY5IDcuMzk5NzggMTMuMTI2MSA3Ljg5Mjg2IDEzLjEyNjFIMTAuOTI4NkMxMS4wMjcyIDEzLjEyNjEgMTEuMTA3MSAxMy4yMDM5IDExLjEwNzEgMTMuMjk5OVYxNi4yNTVDMTEuMTA3MSAxNi43MzUgMTEuNTA2OSAxNy4xMjQyIDEyIDE3LjEyNDJDMTIuNDkzMSAxNy4xMjQyIDEyLjg5MjkgMTYuNzM1IDEyLjg5MjkgMTYuMjU1VjEzLjI5OTlDMTIuODkyOSAxMy4yMDM5IDEyLjk3MjggMTMuMTI2MSAxMy4wNzE0IDEzLjEyNjFIMTYuMTA3MUMxNi42MDAyIDEzLjEyNjEgMTcgMTIuNzM2OSAxNyAxMi4yNTY5QzE3IDExLjc3NjkgMTYuNjAwMiAxMS4zODc4IDE2LjEwNzEgMTEuMzg3OFoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMiIgeTE9IjAiIHgyPSIxMiIgeTI9IjI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzNkNDQkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMEY3OUE4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==',
    filterTop: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjEuNTgxMDUiIHgyPSIxNi4xMTM5IiB5Mj0iMS41ODEwNSIgc3Ryb2tlPSIjMUNBRUE5Ii8+CjxsaW5lIHkxPSI2Ljc4MzIiIHgyPSIxNi4xMTM5IiB5Mj0iNi43ODMyIiBzdHJva2U9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjMuNTI1MzMiIGN5PSIxLjU2MDc1IiByeD0iMS41MTA2OCIgcnk9IjEuNTYwNzUiIGZpbGw9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjEyLjU4ODgiIGN5PSI2Ljc2MjkiIHJ4PSIxLjUxMDY5IiByeT0iMS41NjA3NSIgZmlsbD0iIzFDQUVBOSIvPgo8bGluZSB5MT0iMTEuOTg2MyIgeDI9IjE2LjExMzkiIHkyPSIxMS45ODYzIiBzdHJva2U9IiMxQ0FFQTkiLz4KPGVsbGlwc2UgY3g9IjMuNTI1MzMiIGN5PSIxMS45NjYiIHJ4PSIxLjUxMDY4IiByeT0iMS41NjA3NSIgZmlsbD0iIzFDQUVBOSIvPgo8L3N2Zz4K',
    bg: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDIwNCAyMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMiIgY3k9IjEwMiIgcj0iMTAyIiBmaWxsPSIjRjlGOUY5Ii8+CjxwYXRoIGQ9Ik0xNTUuNDA1IDcxLjIzNDRINDcuNDA1M0w4MS43MjUzIDEzMS43MTRMODIgMTc1QzgyIDE3OC41IDgzIDE3OC41IDg1IDE3Ny41TDEyMS4wODUgMTU5LjJWMTQzLjIzNEwxNTUuNDA1IDcxLjIzNDRaIiBmaWxsPSIjREZFNEVEIiBzdHJva2U9IiNERkUzRTkiLz4KPHJlY3QgeD0iMzcuNzM4MyIgeT0iNTEuNDI5NyIgd2lkdGg9IjEyNyIgaGVpZ2h0PSIxNCIgcng9IjMuNSIgZmlsbD0iI0RGRTRFRCIgc3Ryb2tlPSIjREZFM0U5Ii8+CjxjaXJjbGUgY3g9IjEyNS41OTkiIGN5PSIxMDkuNzI1IiByPSIzNC4xMzQ0IiBmaWxsPSIjRjlGOUY5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI1LjMyNCAxMzguMDVDMTQwLjk2NyAxMzguMDUgMTUzLjY0OSAxMjUuMzY5IDE1My42NDkgMTA5LjcyNkMxNTMuNjQ5IDk0LjA4MjYgMTQwLjk2NyA4MS40MDE0IDEyNS4zMjQgODEuNDAxNEMxMDkuNjgxIDgxLjQwMTQgOTcgOTQuMDgyNiA5NyAxMDkuNzI2Qzk3IDEyNS4zNjkgMTA5LjY4MSAxMzguMDUgMTI1LjMyNCAxMzguMDVaTTEyNS4zMjMgMTMyLjcyNEMxMzguMDI1IDEzMi43MjQgMTQ4LjMyMiAxMjIuNDI3IDE0OC4zMjIgMTA5LjcyNUMxNDguMzIyIDk3LjAyMzggMTM4LjAyNSA4Ni43MjcxIDEyNS4zMjMgODYuNzI3MUMxMTIuNjIyIDg2LjcyNzEgMTAyLjMyNSA5Ny4wMjM4IDEwMi4zMjUgMTA5LjcyNUMxMDIuMzI1IDEyMi40MjcgMTEyLjYyMiAxMzIuNzI0IDEyNS4zMjMgMTMyLjcyNFoiIGZpbGw9IiNERkU0RUQiLz4KPHJlY3QgeD0iMTIzIiB5PSI5NiIgd2lkdGg9IjYiIGhlaWdodD0iMjgiIHJ4PSIyIiBmaWxsPSIjREZFNEVEIi8+CjxyZWN0IHg9IjExMiIgeT0iMTEzIiB3aWR0aD0iNiIgaGVpZ2h0PSIyOCIgcng9IjIiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMTIgMTEzKSIgZmlsbD0iI0RGRTRFRCIvPgo8L3N2Zz4K',

}

export default icons;
