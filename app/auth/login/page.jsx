import Icon from "@components/ui/Icon";
import Link from "@components/ui/Link";
import Separator from "@components/ui/Separator";
import Button from "@components/ui/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

// import LoginCAF from "@components/custom-api-form/LoginForm";

// import LoginCF from "@components/server-action-form/custom-form/LoginForm";

import LoginRHF from
  "@components/server-action-form/react-hook-form/LoginForm";

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=659361166386-75hgnn9l87u9fggc8rkfn9gh5pojc6i3.apps.googleusercontent.com&redirect_uri=http://localhost:3000/auth/google&response_type=code&scope=profile email`;

function Login() {
  return (
    <Main>
      <Section
        className={[
          "flex",
          "flex-col",
          "justify-center",
          "min-h-screen",
          "p-4 sm:p-16",
        ]}
      >
        <Container>
          <Box
            className={[
              "flex",
              "flex-col",
              "justify-center",
              "sm:max-w-[500px] lg:max-w-[500px]",
              "gap-y-4",
              "p-6 sm:p-12 lg:p-16",
              "mx-auto mb-8",
              "bg-white",
              "border",
              "rounded-xl",
              "shadow-xl"
            ]}
          >
            <Box
              className={[
                "space-y-4",
              ]}
            >
              <Button className="w-full" asChild>
                <Link href={googleLoginUrl}>
                  <Icon name="Google" />
                  Login with Google
                </Link>
              </Button>

              <Button className="w-full" asChild>
                <Link href="#">
                  <Icon name="Facebook" />
                  Login with Facebook
                </Link>
              </Button>
            </Box>

            <Box
              className={[
                "flex",
                "items-center text-gray-400",
              ]}
            >
              <Separator className="flex-1" />
              <span className="mx-2 text-sm font-medium">OR</span>
              <Separator className="flex-1" />
            </Box>

            <LoginRHF />
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Login;
