<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">PuntPortalen</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
            aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Hem <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Om</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Logga in</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-success" to="/register">Registrera</router-link>
                </li>
            </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped lang="scss">
.navbar-dark {
    border: 0;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    .navbar-brand {
        border: none;
    }
    .nav-item {
        .nav-link {
            border: none;
            transition: all 200ms;
            &:hover {
                background: transparent;
                border: none;
            }
        }
        .btn {
            margin-top: 6px;
            padding: 0.5rem 1rem;
            transition: all 200ms;
        }
        .btn-success {
            background: #53be53;
            &:hover {
                background: #3ea63e;
            }
        }
    }
}

</style>